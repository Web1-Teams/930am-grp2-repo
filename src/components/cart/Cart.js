//imports
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";
import "./Cart.css"
import { db } from "../firebase/Firebase";

//function

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const inCart = await getDocs(collection(db, "cart"));
        const items = [];
        inCart.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data(), bag: 1 });
        });
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, [db]);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = [...cartItems];
    updatedItems[index].bag = newQuantity;
    setCartItems(updatedItems);
  };

  const myTotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + parseInt(item.price) * parseInt(item.bag),0
    );
  };

  const removeItem = async (index) => {
    const itemToDelete = cartItems[index];
    try {
      await deleteDoc(doc(db, "cart", itemToDelete.id));
      const updatedItems = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedItems);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const cartState=()=>{
    if(cartItems.length!==0)
      return
    return <p>Your Cart is Empty</p>
  }

  const myItems = () => {
    if(cartItems.length!==0)
      return cartItems.map((item, index) => (
      <tr key={item.id}>
        <td> <img className="cart-img" src={item.image} alt={item.title} /> </td>
        <td>{item.title}</td>
        <td>₪{parseInt(item.price)}</td>
        <td>
          <div className="quantity-modifier">
            <Button className="quantity-button" myFunction={() => updateQuantity(index, parseInt(item.bag) - 1)} name="-"/>
            <input value={item.bag} onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 1)} type="text" className="cart-input"/>
            <Button className="quantity-button" myFunction={() => updateQuantity(index, parseInt(item.bag) + 1)} name="+"/>
          </div>
        </td>
        <td>₪{parseInt(item.price) * parseInt(item.bag)}</td>
        <td><FontAwesomeIcon icon={faTrash} onClick={() => removeItem(index)} className="cart-icon"/></td>
      </tr>
      )
    );
  };

return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>{myItems()}</tbody>
      </table>
      {cartState()}
      <p>Your Total is: ₪{myTotal()}</p>
      <Button className="cart-button" name="Proceed to Checkout" />
    </div>
  );
};

//export

export default Cart;