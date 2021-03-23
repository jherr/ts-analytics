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

export interface EventMap {
  checkout: CheckoutEventProps;
  addToCart: AddToCartEventProps;
  viewProduct: ViewProductEventProps;
}

export function trackEvent<K extends keyof EventMap>(
  eventName: K,
  props: EventMap[K]
): void {
  analytics.track(eventName, props);
}
