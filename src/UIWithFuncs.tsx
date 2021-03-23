import { useCallback } from "react";
import { addToCart, checkoutEvent, viewProductEvent } from "./analytics-funcs";

function UIWitEventMap() {
  const onCheckout = useCallback(() => {
    checkoutEvent({
      products: ["iPhone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    addToCart({
      product: "iPhone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    viewProductEvent({
      product: "iPhone",
      referrer: "Android phone",
    });
  }, []);

  return (
    <div>
      <h2>UI With Funcs</h2>
      <button onClick={onViewItem}>View Item</button>
      <button onClick={onAddToCart}>Add To Cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default UIWitEventMap;
