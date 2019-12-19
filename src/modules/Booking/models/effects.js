import api from '../../../api';
import logger from '../../../utils/logger';

export default dispatch => ({
  async configure() {
    try {
      dispatch.app.setFetching(true);

      const tickets = await api.getTickets();
      this.configureTickets(tickets);
      // this.setPatrons(patrons);
    } catch (e) {
      logger(e.message, 'err');
    } finally {
      dispatch.app.setFetching(false);
    }
  },

  async bookTickets(params) {
    try {
      dispatch.app.setFetching(true);
      const {
        formValues: { name, email },
        selected,
        ticketId
      } = params;

      const [seat, seatDesc] = selected;
      const { status } = await api.bookTickets({
        name,
        email,
        seat,
        seatDesc,
        id: ticketId
      });
      const tickets = await api.getTickets();
      this.configureTickets(tickets);

      if (api.bookTickets.CONCURRENT_STATUS_CODES.includes(status)) {
        // eslint-disable-next-line no-alert
        window.alert(
          `Seat ${seatDesc} was recently occupied, please select different seat`
        );
      }
      // this.setPatrons(patrons);
    } catch (e) {
      logger(e.message, 'err');
    } finally {
      dispatch.app.setFetching(false);
    }
  },

  async unbookTicket(params) {
    try {
      dispatch.app.setFetching(true);
      const { email, seat, ticketId } = params;

      await api.unbookTicket({
        email,
        seat,
        id: ticketId
      });
      const tickets = await api.getTickets();
      this.configureTickets(tickets);
      // this.setPatrons(patrons);
    } catch (e) {
      logger(e.message, 'err');
    } finally {
      dispatch.app.setFetching(false);
    }
  }
});
