import { Prompt, Rajdhani, Montserrat, Roboto } from "next/font/google";

export const PromptFont = Prompt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prompt",
});

export const RajdhaniFont = Rajdhani({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prompt",
});

export const MonserratFont = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monserrat",
});

export const RobotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});
