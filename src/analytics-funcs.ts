import Analytics from "analytics";

interface CheckoutEventProps {
  products: string[];
}
interface AddToCartEventProps {
  product: string;
  quantity: number;
}
interface ViewProductEventProps {
  product: string;
  referrer: string;
}

const analytics = Analytics({
  app: "my-app",
  debug: true,
});

function createAnalyticsSender<T>(name: string) {
  return (props: T) => {
    analytics.track(name, props);
  };
}

export const checkoutEvent = createAnalyticsSender<CheckoutEventProps>(
  "checkout"
);
export const viewProductEvent = createAnalyticsSender<ViewProductEventProps>(
  "viewProduct"
);
export const addToCart = createAnalyticsSender<AddToCartEventProps>(
  "addToCart"
);
