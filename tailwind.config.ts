import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        Fm: "376px",
      },
      colors: {
        "Fm-Soft-red": "hsl(7, 99%, 70%)",
        "Fm-Yellow": "hsl(51, 100%, 49%)",
        "Fm-Dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "Fm-Dark-blue": "hsl(198, 62%, 26%)",
        "Fm-Dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "Fm-Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "Fm-Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "Fm-Dark-grayish-blue": "hsl(232, 10%, 55%)",
        "Fm-Grayish-blue": "hsl(210, 4%, 67%)",
        "Fm-White": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "Fm-barlow": ["var-(--font-barlow)"],
        "Fm-fraunces": ["var(--font-fraunces)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
