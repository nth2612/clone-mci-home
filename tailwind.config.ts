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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-bg" : "linear-gradient(92.5deg, #B7042D 6.07%, #E65F1D 93.93%)",
        "con2" : "linear-gradient(92.53deg, #B7042C 29.73%, #E8641B 97.09%)",
        "con3" : "linear-gradient(92.53deg, #c63449 29.73%, #e7743d 97.09%)",
        "spanhov" : "linear-gradient(45deg, #bc0d2c, #e65f1e)",
      },
      colors : {
        "black-0" : "#000000A6",
        "white" : "#fff",
        "primary-left": "#B7042D",
        "primary-right": "#E65F1D",
        "home": "#c41d29",
        "p-home" : "#212529",
        "home-btn": "#ff7f00",
        "red" : "red",
        "orange" : "orange"
      },
      height : {
        "12.5" : "50px"
      },
      width : {
        "37.5" : "150px"
      },
      borderRadius: {
        "30" : "30px",
        "4" : "4px"
      },
      padding: {
        "2.5" : "10px"
      },
      margin: {
        "2.5" : "10px"
      },
      boxShadow : {
        "btn" : "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
        "btn-2" : "0px 4px 30px rgba(235, 114, 87, 0.27)",
        "btn-con1" : "0px 4px 20px rgba(0, 0, 0, 0.25)",
        "btn-about" : "0px 4px 25px rgba(0, 0, 0, 0.25)",
        "card" : "0 4px 8px rgba(0, 0, 0, 0.1)",
        "cardhov" : "0 8px 16px rgba(0, 0, 0, 0.2)",
        "slidebtn" : "0px 4px 30px rgba(235, 114, 87, 0.27)"
      },
    },
  },
  plugins: [],
};
export default config;
