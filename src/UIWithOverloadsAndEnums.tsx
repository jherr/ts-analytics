import { useCallback } from "react";
import { trackEvent, EventName } from "./analytics-overloads-enums";

function UIWithBadAPI() {
  const onCheckout = useCallback(() => {
    trackEvent(EventName.checkout, {
      products: ["iPhone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    trackEvent(EventName.addToCart, {
      product: "iPhone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    trackEvent(EventName.viewProduct, {
      product: "iPhone",
      referrer: "Android phone",
    });
  }, []);

  return (
    <div>
      <h2>UI With Overloads and Enums</h2>
      <button onClick={onViewItem}>View Item</button>
      <button onClick={onAddToCart}>Add To Cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default UIWithBadAPI;
