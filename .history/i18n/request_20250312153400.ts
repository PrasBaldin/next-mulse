import { getRequestConfig } from "next-intl/server";
import { routing, Locale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Cast requestLocale to the correct type
  let locale = (await requestLocale) as Locale;

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../messages/en.json")
        : import(`../messages/${locale}.json`))
    ).default,
  };
});
