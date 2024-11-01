"use client";

import Image from "next/image";

import { PromptFont, MonserratFont, RajdhaniFont } from "@/libs/fonts";
import NavBar from "../nav-bar";

import { siteTitle, siteDescription } from "@/libs/texts";
import { motion, AnimatePresence } from "framer-motion";

const AppHeader = () => {
  return (
    <header className="p-1 shadow bg-[url('/images/frosty-toronto.png')] rounded-xl">
      {/* <div className="flex w-full max-w-2xl pt-10 mx-auto align-middle md:pt-8"> */}
      <div className="w-1/5 mr-2 ml-36">
        {/* <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
                y: -45,
              },
              visible: {
                scale: 2,
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          > */}
        <h1
          className={`${RajdhaniFont.variable} font-rajdhani text-secondary text-2xl text-black`}
        >
          {siteTitle}
        </h1>
        {/* </motion.div>
        </AnimatePresence> */}

        {/* <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="flex m-auto border-slate-800 text-primary"
          > */}
        <h2
          className={`text-slate-400 overflow-visible whitespace-nowrap ${MonserratFont.variable} font-monserrat`}
        >
          {siteDescription}
        </h2>
        {/* </motion.div>
        </AnimatePresence> */}

        <Image
          className="rounded-lg"
          alt="yop"
          src="/images/sonic-mind-control.png"
          width={400}
          height={400}
        />
      </div>

      {/* <NavBar /> */}
    </header>
  );
};

export default AppHeader;
