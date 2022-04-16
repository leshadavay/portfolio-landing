module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  //content: [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        mypurple: {
          DEFAULT: "#D9AFD9",
        },
        myblue: {
          DEFAULT: "#97D9E1",
        },
      },
    },
    fontFamily: {
      square: ['"Square Peg"'],
    },
  },
  plugins: [],
};
