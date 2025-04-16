import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { routing, Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";

import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoogleTags from "@/components/googleTags";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const messages = await getMessages({ locale });

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const userAgent = (await headers()).get("user-agent") || "";
  const isEdge = userAgent.includes("Edg");

  return (
    <html lang={locale}>
      <head>
        <GoogleTags />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          isEdge ? "" : "not-edge"
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
