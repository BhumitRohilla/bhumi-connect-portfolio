import posthog from "posthog-js";

const POSTHOG_KEY = "phc_LdmvlBW59Q71jhR1eleVec67FubPb8vrm4eg6jutn7p";
const POSTHOG_HOST = "https://us.i.posthog.com";

export const initPostHog = () => {
  if (typeof window !== "undefined") {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
    });
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  posthog.capture(eventName, properties);
};

export const trackResumeDownload = (source: string) => {
  trackEvent("resume_downloaded", {
    source,
    timestamp: new Date().toISOString(),
  });
};

export { posthog };
