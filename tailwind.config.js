/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: [
          "70px",
          {
            lineHeight: "73px",
            fontWeight: "800",
          },
        ],
        h2: [
          "50px",
          {
            lineHeight: "59px",
            fontWeight: "800",
          },
        ],
        h3: [
          "35px",
          {
            lineHeight: "47px",
            fontWeight: "800",
          },
        ],
        h4: [
          "36px",
          {
            lineHeight: "50px",
            fontWeight: "400",
          },
        ],
        h5: [
          "30px",
          {
            lineHeight: "35px",
            fontWeight: "700",
          },
        ],
        h6: [
          "25px",
          {
            lineHeight: "29px",
            fontWeight: "800",
          },
        ],
        Paragraph: [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "400",
          },
        ],
        List: [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "700",
          },
        ],
        cart: [
          "18px",
          {
            lineHeight: "21px",
            fontWeight: "600",
          },
        ],
        cart1: [
          "40px",
          {
            lineHeight: "46px",
            fontWeight: "600",
          },
        ],
        cart2: [
          "20px",
          {
            lineHeight: "27px",
            fontWeight: "600",
          },
        ],
        cart3: [
          "25px",
          {
            lineHeight: "34px",
            fontWeight: "700",
          },
        ],
        headerList: [
          "20px",
          {
            lineHeight: "23px",
            fontWeight: "700",
          },
        ],
        headerList2: [
          "20px",
          {
            lineHeight: "23px",
            fontWeight: "500",
          },
        ],
        sum: [
          "15px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        btn: [
          "25px",
          {
            lineHeight: "29px",
            fontWeight: "500",
          },
        ],
        btn2: [
          "20px",
          {
            lineHeight: "29px",
            fontWeight: "500",
          },
        ],
        new: [
          "18px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
        new2: [
          "18px",
          {
            fontWeight: "700",
          },
        ],
        new3: [
          "22px",
          {
            lineHeight: "30px",
            fontWeight: "400",
          },
        ],
        new4: [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "400",
          },
        ],
        
      },
      colors: {
        primary: " rgb(39,76,91)",
        green: "rgb(126,182,147)",
        Btn2: "rgb(239,211,114)",
        Btn1: "rgb(212,212,212);",
        BgColor: "rgb(249,248,248)",
        btn3: "rgb(239,246,241)",
        TextP: "rgb(82,92,96)",
        textP2:"rgb(82, 92, 96)"
      },
      fontFamily: {
        display: ["Yellowtail", "sans-serif"],
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          xl: "1440px",
        },
      },
    },
  },
  plugins: [],
};
