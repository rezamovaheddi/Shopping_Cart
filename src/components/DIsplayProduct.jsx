 const DIsplayProduct = ({cartItems}) => {
  return (
    <div>
      <h1>cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ):(
        cartItems.map(item => 
          <div key={item.id} className="border-b p-2 flex justify-between">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.price * item.quantity}$</span>
          </div>
        )
      )}
    </div>
  )
}

export default DIsplayProduct