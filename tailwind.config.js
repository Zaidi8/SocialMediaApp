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
      fontFamily: {
        Montserrat: ['Montserrat-Regular'],
        MontserratBold: ['Montserrat-Bold'],
        MontserratSemiBold: ['Montserrat-SemiBold'],
        MontserratMedium: ['Montserrat-Medium'],
        MontserratLight: ['Montserrat-Light'],
        MontserratThin: ['Montserrat-Thin'],
        MontserratExtraLight: ['Montserrat-ExtraLight'],
        
      },
    },
  },
  plugins: [],
}