import { type AppType } from "next/dist/shared/lib/utils";
import { Barlow, Fraunces } from "next/font/google";
import "~/styles/globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-barlow",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fraunces",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${barlow.variable} ${fraunces.variable} w-full font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
