import '../styles/work.css'
import '../styles/checkout.css'
import { useState } from 'react';
import pink from '../assets/cactus.jpg'
import pink_audio from '../assets/pink.mp3'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import popjazz from '../assets/pop-jazz.png'

//todo: make sample pack, update audio, update google drive link

const products = [
  {
    id: 1,
    title: "Pink Cactus Sample Pack",
    description: "A sound experiment blending genres of RnB, indie pop, and synthwave. This pack includes original loops of catchy synth lines and acoustic guitar songstarters.",
    image: pink,
    audioSrc: pink_audio,
    price: 14.99
  },
]

const Store = () => {
  const [cart,setCart] = useState([])
  const [showModal, setShowModal] = useState(false);
  
  function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function clearCart(){
    setCart([])
  }

  function displayModal() {
    setShowModal(!showModal);
  }
  
  function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }  
  
  return (
    <div>
      <div className='checkout-bar'>
        <a onClick={displayModal}>
          <div>
            Checkout <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </a>
      </div>
      {showModal && (
        <div className="checkout-modal">
          <div className="exit">
            <a onClick={displayModal}>x</a>
          </div>
          {cart.length > 0 ? cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.quantity} x ${item.price}</p>
              </div>
            </div>
          )) : <h4>Your cart is empty.</h4>}
          <button onClick={clearCart}>Clear Cart</button>
          <h3 style={{padding:'20px 0',textDecoration:'line-through'}}>Your Total: ${calculateTotal()}</h3>
          <h4>It{`'`}s free! Check out to download on Google Drive.</h4>
          <button style={{backgroundColor: 'dodgerblue'}} onClick={()=>{window.location.href = 'https://drive.google.com/file/d/1upNaJMeXIfqhQIbS5N0ke8AT9imCTpU_/view?usp=sharing';}}>Checkout</button>
        </div>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <audio controls>
              <source src={product.audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <h3>${product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;