const Order = ({ match }) => (
  <div>
      <h1>Order</h1>
      {match.params.id}
  </div>
)

export default Order;
