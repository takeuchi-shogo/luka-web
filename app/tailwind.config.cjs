module.exports = {
  mode: "jit",
  plugins: [],
  theme: {
    extend: {},
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: true, // or 'media' or 'class'
}