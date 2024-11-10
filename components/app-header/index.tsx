"use client";

// #region IMPORT
import Image from "next/image";
import { MonserratFont, RajdhaniFont } from "@/lib/fonts";
import { siteTitle, siteDescription } from "@/lib/labels";
import { HEADER_IMAGE_FILE } from "@/lib/files";
// #endregion

const AppHeader = () => {
  // #region VIEW
  return (
    <header className="p-1 shadow rounded-xl">
      <div className="w-3/5 mr-2 ml-36 bg-black">
        <h1
          className={`${RajdhaniFont.variable} font-rajdhani text-secondary text-4xl w-full text-white`}
        >
          {siteTitle}
        </h1>
        <h2
          className={`text-slate-400 overflow-visible whitespace-nowrap ${MonserratFont.variable} font-monserrat`}
        >
          {siteDescription}
        </h2>

        <Image
          className="rounded-lg"
          alt="yop"
          src={HEADER_IMAGE_FILE}
          width={200}
          height={200}
        />
      </div>
    </header>
  );
  // #endregion
};

export default AppHeader;
