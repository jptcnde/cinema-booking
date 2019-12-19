import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Divider } from '@material-ui/core';
import AppFooter from '../../domain-components/AppFooter';
import AppBar from '../../domain-components/AppBar/AppBar';

import CheckoutInfoDialog from './CheckoutInfoDialog';
import UnbookDialog from './UnbookDialog';
import Checkout from './Checkout';
import { validationSchema } from './Checkout/constants';
import Theater from './Theater';
import Legend from './Theater/Legend';

import {
  getCinemaMap,
  getTicketMap,
  getBookedSeats,
  getSelectedSeats
} from './models/selectors';
import { getCurrentPatron } from '../../store/selectors/app';

function BookingPage(props) {
  const {
    // ticketId - hardcoded for now, for enhancement
    match: {
      params: { ticketId = 'a1' }
    }
  } = props;
  const {
    booking: { configure, bookTickets, unbookTicket }
  } = useDispatch();

  // internal states
  const [formValues, setFormValues] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);

  const [checkoutDialogInfoOpen, setCheckoutDialogInfoOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [unbookDialogOpen, setUnbookDialogOpen] = useState(false);

  const [selectedSeat, setSelectedSeat] = useState([]);

  // selectors
  const ticketMap = useSelector(getTicketMap);
  const cinemaMap = useSelector(getCinemaMap);
  const { email, name } = useSelector(getCurrentPatron);

  const {
    cinemaId,
    booked: bookedList = [],
    unavailable: unavailableSeats = []
  } = ticketMap[ticketId] || {};

  const { seats = [] } = cinemaMap[cinemaId] || {};

  const selectedSeats = getSelectedSeats(bookedList, email);
  const bookedSeats = getBookedSeats(bookedList, selectedSeats);

  function handleSelect(seatId, seatDesc) {
    setSelectedSeat([seatId, seatDesc]);
    if (selectedSeats.includes(seatId)) {
      setUnbookDialogOpen(true);
      return;
    }
    setCheckoutOpen(true);
  }

  function handleFormChange(newValues, newCanSubmit) {
    setFormValues(newValues);
    setCanSubmit(newCanSubmit);
  }

  async function handleUnbook() {
    const [seat] = selectedSeat;
    await unbookTicket({
      email,
      ticketId,
      seat
    });
    setUnbookDialogOpen(false);
    setSelectedSeat([]);
  }

  async function handleCheckoutSubmit() {
    await bookTickets({ formValues, selected: selectedSeat, ticketId });
    setSelectedSeat([]);
    setCheckoutOpen(false);
  }

  useEffect(() => {
    configure();
  }, [configure]); // workaround for eslint warning as it has deps with useDispatch

  return (
    <>
      <AppBar />
      <br />
      <Container maxWidth="lg" component="main">
        <Legend />
        <Theater
          bookedSeats={bookedSeats}
          seats={seats}
          unavailableSeats={unavailableSeats}
          selected={selectedSeats}
          onSelect={handleSelect}
        />
      </Container>
      <br />
      <Divider />
      <br />
      <AppFooter />

      {checkoutOpen && (
        <Formik
          validationSchema={validationSchema}
          initialValues={{ name, email }}
        >
          <Checkout
            onClose={() => setCheckoutOpen(false)}
            open={checkoutOpen}
            onFormChange={handleFormChange}
            canSubmit={canSubmit}
            onSubmit={handleCheckoutSubmit}
          />
        </Formik>
      )}
      <UnbookDialog
        open={unbookDialogOpen}
        onClose={() => setUnbookDialogOpen(false)}
        onSubmit={handleUnbook}
      />
      <CheckoutInfoDialog
        open={checkoutDialogInfoOpen}
        onSubmit={() => setCheckoutDialogInfoOpen(false)}
      />
    </>
  );
}

BookingPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.instanceOf(Object).isRequired
  }).isRequired
};

export default BookingPage;
