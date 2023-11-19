import styles from "./Cart.module.css";
// Importing required Images/icons
import deleteIcon from "../images/icon-delete.svg";
import image from "../images/image-product-1-thumbnail.jpg";

/*
=========================COMPONENT DETAILS==================================================

This component will show the cart details once user clicks on avtar or cart icon

We have imported below props 
    1) CardStatus - If this is true then cart component will render in UI
    2) ItemCount - To show how many items are added then we need the Number of 
                    items, we taken this informatoin in Product.jsx component
    3) SetItemCount - When we click in delete icon then we will set the `itemcount` to zero so cart will 
                      show the empty message.
*/

function Cart({ CardStatus, ItemCount, SetItemCount, menu }) {
  console.log(menu);
  if (!CardStatus || menu) return;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Cart</h3>
      </div>
      <div className={styles.cartbody}>
        {ItemCount === 0 ? (
          <div className={styles.cartbodyNull}>
            <p>You cart is empty.</p>
          </div>
        ) : (
          <div className={styles.cart_body_container}>
            <div className={styles.cartbodyFill}>
              <div className={styles.itemImage}>
                <img src={image}></img>
              </div>
              <div className={styles.itemDescription}>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  <span>
                    $125 x <span>{ItemCount}</span>{" "}
                    <span className={styles.price}>$375.00</span>
                  </span>
                </p>
              </div>
              <div
                className={styles.deleteIcon}
                onClick={() => SetItemCount(0)}
              >
                <img src={deleteIcon}></img>
              </div>
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
