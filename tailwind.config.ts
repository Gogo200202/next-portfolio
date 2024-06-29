import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fade: 'fadeIn  .8s ease-in-out ',
        fadeBody:'fadeIn  .9s ease-in-out ',
        textUp:"modeUp  .7s ease-in-out  ",
        textLeft:"slideLeft .5s ease-in-out"
      },
      keyframes: {
        modeUp:{
       '0%': {
            transform: 'translateY(0px)',
          },

          '50%': {
            transform: 'translateY(calc(10px - 100%))',
          },

          '100%': {
            transform: 'translateY(0px)',
          },
        },
        slideLeft:{
          '0%': {
               transform: 'translateX(0px)',
             },
   
             '50%': {
               transform: 'translateX(calc(1px + 20%))',
             },
   
             '100%': {
               transform: 'translateX(0px)',
             },
           },

        wiggle: {
          '0%, 100%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
        },
        fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "50" },
				},
      
      }

    },
  },
  plugins: [],
};
export default config;
