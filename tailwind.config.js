/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        'txt':'#022150',
        'message-bg':'#f9fafb',
        'border':'#f35bac',
      },
      fontSize: {
        '6px': ['6px', { lineHeight: '8px' }],
      },
    },
  },
  plugins: [],
}