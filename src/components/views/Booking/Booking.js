const Booking = ({ match }) => (
  <div>
      <h1>Booking</h1>
      {match.params.id}
  </div>
)

export default Booking;
