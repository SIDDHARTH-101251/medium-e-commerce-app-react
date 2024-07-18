import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <div>
            <div className="position">
              <h1 className="total-amount-para">Order Total:</h1>
              <p className="total-amount-value">Rs {total}/-</p>
            </div>
            <p className="total-items-para">{cartList.length} Items in Cart</p>
          </div>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
