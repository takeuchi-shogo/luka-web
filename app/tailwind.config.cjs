module.exports = {
  mode: "jit",
  // content: ['./src/**/*.{svelte,js,ts}'],
  // plugins: [require("daisyui")],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '600': '600px',
      }
    },
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: true, // or 'media' or 'class'
}
