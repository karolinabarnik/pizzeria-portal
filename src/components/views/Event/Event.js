const Event = ({ match }) => (
  <div>
      <h1>Event</h1>
      {match.params.id}
  </div>
)

export default Event;
