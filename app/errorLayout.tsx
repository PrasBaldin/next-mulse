// app/errorLayout.tsx
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { routing, Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function ErrorLayout({ children, params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const messages = await getMessages({ locale });

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <title>404 : Page not found</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
