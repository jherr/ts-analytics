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

export function trackEvent(
  eventName: "checkout",
  props: CheckoutEventProps
): void;
export function trackEvent(
  eventName: "addToCart",
  props: AddToCartEventProps
): void;
export function trackEvent(
  eventName: "viewProduct",
  props: ViewProductEventProps
): void;
export function trackEvent(eventName: string, props: {}): void {
  analytics.track(eventName, props);
}
