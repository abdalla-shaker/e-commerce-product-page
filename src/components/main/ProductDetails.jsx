import { useContext, useState } from "react";
import { CartItemsContext } from "../../store/CartShoppingContext.jsx";

import { IMAGES } from "../../data.js";

export default function ProductDetails() {
  const [productQuantity, setProductQuantity] = useState({
    count: 1,
  });
  const { addCartItem } = useContext(CartItemsContext);

  const quantityModifier = (state) => {
    if (state === "+") {
      setProductQuantity((prevValue) => {
        return { count: prevValue.count++ };
      });
    } else {
      setProductQuantity((prevValue) => {
        return { count: prevValue.count-- };
      });
    }
  };

  return (
    <section id="product_details">
      <span className="subtitle">sneakers company</span>
      <h1 className="title">{IMAGES.product_1.title}</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-cont flex items-center">
        <p className="price">${IMAGES.product_1.price.toFixed(2)}</p>
        <p className="discount">{IMAGES.product_1.discount * 100}%</p>
      </div>
      <p className="old-price">${IMAGES.product_1.originalPrice.toFixed(2)}</p>
      <div className="button-group flex items-center">
        <div className="quantity-manag-cont flex items-center">
          {productQuantity.count === 1 ? (
            <button disabled>-</button>
          ) : (
            <button onClick={() => quantityModifier("-")}>-</button>
          )}

          <p>{productQuantity.count}</p>
          <button onClick={() => quantityModifier("+")}>+</button>
        </div>
        <button
          className="checkout-button flex items-center"
          onClick={() =>
            addCartItem(IMAGES.product_1.productID, productQuantity.count)
          }
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </section>
  );
}
