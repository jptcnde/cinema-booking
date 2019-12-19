
const db = require('../api');


async function unbookTicket(event) {
  try {
    const {
      id: ticketId,
      email,
      seat
    } = JSON.parse(event.body);

    if ([ticketId, email, seat].map(x => String(x).trim()).some(x => !x)) {
      return {
        status: 400,
        statusText: 'Missing Parameter'
      };
    }

    const { Item: ticketItem = {} } = await db.get({
      TableName: process.env.DB_TBL_TICKET,
      Key: { id: ticketId },
    }).promise();


    const { booked: bookedItemList } = ticketItem;

    const newBookedList = [
      ...bookedItemList.filter(x => x.email !== email),
      ...bookedItemList
      .filter(x => x.email === email)
      .filter(x => x.seat !== seat),
    ];

    const params = {
      Key: { id: ticketId },
      TableName: process.env.DB_TBL_TICKET,
      UpdateExpression: 'set booked = :booked',
      ExpressionAttributeValues: {
        ':booked': newBookedList,
      }
    };

    await db.update(params).promise();

    return {
      status: 200,
      // not recommended for real world app
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({})
    };

  } catch(e) {
    return {
      status: 500,
      statusText: e.message
    };
  }

}

module.exports = unbookTicket;