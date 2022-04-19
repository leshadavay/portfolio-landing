module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  //content: [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ],
  darkMode: "class",
  theme: {
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        mygreen: {
          DEFAULT: "#54B689",
        },
        mypurple: {
          DEFAULT: "#D9AFD9",
        },
        myblue: {
          DEFAULT: "#97D9E1",
        },
        mydark: {
          DEFAULT: "#1e2a3a",
          100: "#0a0b0e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
    fontFamily: {
      noto: ['"Noto Sans"'],
    },
  },
  plugins: [],
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
};
