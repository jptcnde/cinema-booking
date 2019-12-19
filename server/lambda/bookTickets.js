
const formatDate = require('date-fns/format');
const nodemailer = require('nodemailer');
const db = require('../api');

const transporterOpts = JSON.parse(process.env.MAIL_TRANSPORTER);
const mailOpts = JSON.parse(process.env.MAIL_OPTIONS);

async function bookTickets(event) {
  try {
    const {
      id,
      email,
      name,
      seat, seatDesc
    } = JSON.parse(event.body);

    if ([id, email, name, seat, seatDesc].map(x => String(x).trim()).some(x => !x)) {
      return {
        statusCode: 400,
        statusText: 'Missing Parameter'
      };
    }

    const { Item: ticketItem = {} } = await db.get({
      TableName: process.env.DB_TBL_TICKET,
      Key: { id },
    }).promise();


    const { booked: bookedItemList } = ticketItem;

    const currentBookedSeats = bookedItemList.filter(x => x.email !== email).map(x => x.seat);

    if (currentBookedSeats.some(x => seat === x)) {
      return {
        statusCode: 409,
        statusText: `Seat - ${seatDesc} requested was recently occupied, please select another`
      };
    }

    const tnxDate = formatDate(Date.now(), String(process.env.DATE_TIME_FORMAT).trim());

    const newBookedList = [
      // should only contains few items for this exercise, I was thinking to make it as separate "booked" table instead
      // but for this exercise this would be enough
      ...bookedItemList,
      {
        seat,
        seatDesc,
        date: tnxDate,
        email,
        name,
      }
    ];

    const params = {
      Key: { id },
      TableName: process.env.DB_TBL_TICKET,
      UpdateExpression: 'set booked = :booked',
      ExpressionAttributeValues: {
        ':booked': newBookedList,
      }
    };

    await db.update(params).promise();

    const transporter = nodemailer.createTransport(transporterOpts);

    await transporter.sendMail({
      ...mailOpts,
      to: email,
      html: `
      <p>
        Your booking for seat ${seatDesc} has been submitted successfully!
        Please <a href="${process.env.SITE_LINK}" target="_blank" alt="cinema site">click here</a>
        to proceed with your transaction. Thank you!

      </p>
      `
    });

    return {
      statusCode: 200,
      // not recommended for real world app
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({})
    };

  } catch(e) {
    return {
      statusCode: 500,
      statusText: e.message
    };
  }

}

module.exports = bookTickets;