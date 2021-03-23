import { useCallback } from "react";
import { trackEvent } from "./analytics-overloads";

function UIWithBadAPI() {
  const onCheckout = useCallback(() => {
    trackEvent("checkout", {
      products: ["iPhone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    trackEvent("addToCart", {
      product: "iPhone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    trackEvent("viewProduct", {
      product: "iPhone",
      referrer: "Android phone",
    });
  }, []);

  return (
    <div>
      <h2>UI With Overloads</h2>
      <button onClick={onViewItem}>View Item</button>
      <button onClick={onAddToCart}>Add To Cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default UIWithBadAPI;
