import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// import { motion, AnimatePresence } from "framer-motion";

import {
  siteTitle,
  aboutLabel,
  projectsLabel,
  certsLabel,
  contactLabel,
  contactEmail,
  questionsLabel,
} from "@/libs/texts";

import { TfiEmail } from "react-icons/tfi";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="navbar bg-base-100 bg-gradient-to-r from-black to-slate-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">{aboutLabel}</Link>
            </li>
            <li>
              <Link href="/questions">{questionsLabel}</Link>
            </li>
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost"></a>
      </div>
      {/* <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link className={usePathname() == "/" ? "active" : ""} href="/">
              {aboutLabel}
            </Link>
          </li>
          <li>
            <Link
              className={usePathname() == "/questions" ? "active" : ""}
              href="/questions"
            >
              {questionsLabel}
            </Link>
          </li>
        </ul>
      </div> */}
      {/* <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="navbar-end"
        > */}
      <a
        href={`mailto:` + `${contactEmail}`}
        className="border-secondary btn btn-outline drop-shadow-lg hover:bg-slate-600 shadow-cyan-300"
      >
        {contactLabel}
        <TfiEmail scale={10} />
      </a>
      {/* </motion.div>
      </AnimatePresence> */}
    </div>
  );
};

export default NavBar;
