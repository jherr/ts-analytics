import Analytics from "analytics";

export enum EventName {
  checkout = "checkout",
  addToCart = "addToCart",
  viewProduct = "viewProduct",
}

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

export function trackEvent(
  eventName: EventName.checkout,
  props: CheckoutEventProps
): void;
export function trackEvent(
  eventName: EventName.addToCart,
  props: AddToCartEventProps
): void;
export function trackEvent(
  eventName: EventName.viewProduct,
  props: ViewProductEventProps
): void;
export function trackEvent(eventName: EventName, props: {}): void {
  analytics.track(eventName, props);
}
