export default dispatch => ({
  async applyUser({ email, name }) {
    this.setCurrentPatron({ email, name });
    await dispatch.booking.configure();
  }
});
