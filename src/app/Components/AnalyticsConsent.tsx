"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "premier-analytics-consent";
const CONSENT_EVENT = "premier:open-cookie-settings";
const MEASUREMENT_ID = "G-9RWME1XVX6";

type ConsentChoice = "accepted" | "declined" | null;

function removeAnalyticsCookies() {
  const analyticsCookies = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name) => name?.startsWith("_ga"));

  for (const name of analyticsCookies) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.premier.furniture; SameSite=Lax`;
  }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadSavedChoice = () => {
      const savedChoice = window.localStorage.getItem(CONSENT_KEY);

      if (savedChoice === "accepted" || savedChoice === "declined") {
        setChoice(savedChoice);
      } else {
        setIsOpen(true);
      }
    };

    const loadTimer = window.setTimeout(loadSavedChoice, 0);

    const openSettings = () => setIsOpen(true);
    window.addEventListener(CONSENT_EVENT, openSettings);

    return () => {
      window.clearTimeout(loadTimer);
      window.removeEventListener(CONSENT_EVENT, openSettings);
    };
  }, []);

  const saveChoice = (nextChoice: Exclude<ConsentChoice, null>) => {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    setIsOpen(false);

    if (nextChoice === "declined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      removeAnalyticsCookies();
    }
  };

  return (
    <>
      {choice === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />

          <Script id="ga4-consented" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('config', '${MEASUREMENT_ID}', {
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {isOpen && (
        <aside
          role="dialog"
          aria-label="Cookie and analytics preferences"
          aria-describedby="cookie-consent-description"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6"
        >
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-950">
                Your privacy choices
              </h2>

              <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-relaxed text-gray-600"
              >
                This site uses optional Google Analytics cookies to understand
                visits and improve the website. Analytics stays off unless you
                allow it. See our{" "}
                <Link
                  href="/cookies"
                  className="font-semibold text-red-700 underline"
                >
                  Cookies Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-red-700 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <button
                type="button"
                onClick={() => saveChoice("declined")}
                className="min-h-11 rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Decline Analytics
              </button>

              <button
                type="button"
                onClick={() => saveChoice("accepted")}
                className="min-h-11 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Allow Analytics
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}