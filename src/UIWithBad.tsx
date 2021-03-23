import { useCallback } from "react";
import analytics from "./analytics-bad";

function UIWithBadAPI() {
  const onCheckout = useCallback(() => {
    analytics.track("checkout", {
      products: ["iPhone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    analytics.track("addToCart", {
      product: "iPhone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    analytics.track("viewProduct", {
      product: "iPhone",
      referrer: "Android phone",
    });
  }, []);

  return (
    <div>
      <h2>UI With Bad API</h2>
      <button onClick={onViewItem}>View Item</button>
      <button onClick={onAddToCart}>Add To Cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default UIWithBadAPI;
