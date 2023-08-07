/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    backgroundImage: {
      my_bg: `radial-gradient(at 95% 99%, hsla(154,99%,72%,1) 0px, transparent 50%),
      radial-gradient(at 80% 80%, hsla(232,70%,78%,1) 0px, transparent 50%),
      radial-gradient(at 0% 30%, hsla(98,65%,68%,1) 0px, transparent 50%),
      radial-gradient(at 83% 85%, hsla(42,80%,78%,1) 0px, transparent 50%),
      radial-gradient(at 42% 36%, hsla(342,83%,62%,1) 0px, transparent 50%),
      radial-gradient(at 79% 21%, hsla(138,68%,73%,1) 0px, transparent 50%),
      radial-gradient(at 4% 28%, hsla(194,64%,74%,1) 0px, transparent 50%)`,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
