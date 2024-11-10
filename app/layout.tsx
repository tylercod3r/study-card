// #region IMPORT
import { Metadata } from "next";

import AppHeader from "@/components/app-header";
// import AppFooter from "@/components/app-footer";

import "./globals.css";
import { RobotoFont } from "@/lib/fonts";
// #endregion

// #region EXPORT - METADATA
export const metadata: Metadata = {
  title: "study-card.com",
  description:
    "Fullstack software development for web, gaming, & mixed-reality.",
};
// #endregion

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="my-theme">
      <body
        className={`max-w-2xl py-6 bg-black m-auto ${RobotoFont.variable} font-roboto`}
      >
        <div className="flex flex-col rounded-lg">
          <AppHeader />
          <div className="flex flex-row">
            <div className="w-full py-2 rounded-r-lg border-slate-600">
              {children}
            </div>
          </div>
          {/* <AppFooter /> */}
        </div>
      </body>
    </html>
  );
}
