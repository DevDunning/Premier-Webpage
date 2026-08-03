type AnalyticsValue = string | number | boolean | undefined;

export type AnalyticsParams = Record<string, AnalyticsValue>;

type ConsentParams = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

type Gtag = {
  (
    command: "event",
    eventName: string,
    params?: AnalyticsParams,
  ): void;
  (
    command: "consent",
    action: "default" | "update",
    params: ConsentParams,
  ): void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function trackEvent(name: string, params?: AnalyticsParams) {
  if (typeof window !== "undefined") {
    window.gtag?.("event", name, params);
  }
}