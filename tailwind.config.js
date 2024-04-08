/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","*.js"],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
    },
    extend: {
      fontFamily: {
        'spotify-font': 'CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,sans-serif'
      },
      screens: {
        'm-sm': { 'raw': '(max-width: 640px)' },
        'm-2xl': { 'raw': '(min-width: 1535px)' },
        'm-1430': { 'raw': '(min-width: 1430px)' },

        '1xl': { 'raw': '(max-width: 1391px)' },
        'xxl': { 'raw': '(max-width: 1370px)' },
        'm-xxl': { 'raw': '(min-width: 1370px)' },
        's-1355': { 'raw': '(max-width: 1355px)' },
        'ms-1355': { 'raw': '(min-width: 1355px)' },
        'ms-1355': { 'raw': '(min-width: 1355px)' },
        's-1335': { 'raw': '(max-width: 1335px)' },
        'ms-1060': { 'raw': '(min-width: 1060px)' },
        's-1060': { 'raw': '(max-width: 1060px)' },
        'ms-640': {'raw': '(min-width: 640px)'},
        's-640': {'raw': '(max-width: 640px)'},
        's-599': {'raw': '(max-width: 599px)'},
        's-385': {'raw': '(max-width: 385px)'},
        's-235': {'raw': '(min-width: 235px)'},

        'ms-850': {'raw': '(min-height: 851px)'},
        's-860': {'raw': '(min-height: 860px)'},
        'ms-550': {'raw': '(min-height: 550px)'},
        'ms-628': {'raw': '(max-height: 629px)'},
        'mhs-648': {'raw': '(min-height: 648px)'},
        'ms-640': {'raw': '(min-height: 640px)'},
        'ms-720': {'raw': '(min-height: 720px)'},
        'mhs-1180': {'raw': '(min-height: 1180px)'},

        'mhs-5-6-6': {'raw': '((min-height: 550px) and (max-height: 638px) and (min-height: 640px))'},


        'sw-600-640-h-850': {'raw': '((min-width: 600px) and (min-width: 641px) and (max-height:850px))'},
        's-850': {'raw': '(max-height:850px)'},

        's-720-850': {'raw': '((min-height: 720px) and (max-height:850px))'},
        's-1060-1160': { 'raw': '((min-width: 1060px) and (max-width: 1160px))' },
        's-1160-1260': { 'raw': '((min-width: 1160px) and (max-width: 1355px))' },
        's-1060-1355': { 'raw': '((min-width: 1060px) and (max-width: 1355px))' },
        's-860-1060': { 'raw': '((min-width: 860px) and (max-width: 1060px))' },
        's-641-860': { 'raw': '((min-width: 641px) and (max-width: 860px))' },
        's-600-641': { 'raw': '((min-width: 600px) and (max-width: 640px))' },
        // '': { 'raw': '((max-width: 995px) and (max-height: 700px))' },
      },
      width: {
        '*15': '15vw',
        '*22': '22%',
        '*55': '55%',
        '*86': '86%',
        '*88': '88%',
        '*91': '91%',
        '*99': '99%',
        '*103': '103%',
        '*27': '27px',
        '*103': '103%',
        '*147': '147px',
        '*200': '200px',
        '*246': '246px',
        'inherit': 'inherit',
      },
      height: {
        '*147': '147px',
      },
      maxWidth: {
        '*95':'95%'  
      },
      gridTemplateColumns: {
        '314-76': '314px 76%',
        '247-78': '247px 78%',
        '25-70': '25vw 70.7vw',
        '25-72': '25vw 72.7vw',
        '25-73': '25vw 73vw',
        '25-73.3': '25vw 73.3vw',
        '28-69': '28vw 69vw',
        '35-61': '35vw 61vw',
        '40-56': '40vw 56vw',
      },
      borderWidth: {
        '*1': '1px',
      },
      fontSize: {
        '*11': '11px',
        '*17': '17px',
        '*18': '18px',
        '*19': '19px',
        '*22': '22px',
        '*25': '25px',
        '*35': '35px',
      },
      fontWeight: {
        'light': '100',
        'semi': '400',
      },
      padding: {
        '*2': '2px',
        '*3': '3px',
        '*5': '5px',
        '*6': '6px',
        '*7': '7px',
        '*9': '9px',
        '*10': '10px',
        '*11': '11px',
        '*13': '13px',
        '*14': '14px',
        '*18': '18px',
        '*22': '22px',
      },
      colors: {
        'c-search':'#B3B3B3',
        'small-txt': '#A7A7A7'
      },
      backgroundColor: {
        'divs': '#121212',
        'inner-div': 'rgb(36, 36, 36)',
        'arrow': 'rgb(10,10,10)',
        'icon': 'rgb(41, 41, 41)',
        'sec-color': 'rgba(0, 0, 0, 0.6)',
        'head': '#101010',
        'opt': '#262424',
        'card-h':'rgba(40,40,40,0.7)',
        'play':'#1FDF64',
        'card':'#242424',
       
      },
      backgroundImage: {
        'song-bg': 'linear-gradient(0.5turn, gray -175%, #121212 20%,#121212 94%)',
      },
      margin: {
        '*6': '6px',
        '*7': '7px',
        '*25': '25px',
      },
      color: {
        'my-grey': 'rgb(167, 167, 167)',
      },
      borderRadius: {
        '*50%': '50%'
      },
      gap: {
        '*10': '10px',
        '*26': '26px'
      },
      keyframes: {
        moveIn: {
          '0%': { top: '99px;' },
          '100%': { top: '85px' }
        },
        moveInS_640: {
          '0%': { top: '180px;' },
          '100%': { top: '117px' }
        },
        moveOut: {
          '0%': { top: '85px;' },
          '100%': { top: '99px' }
        },
      },
      animation: {
        'move-in': 'moveIn 0.3s ease-in-out',
        'move-in-s-640': 'moveInS_640 0.3s ease-in-out',
        'move-out': 'moveOut 0.3s ease-in-out',
        'move-upAgain': 'moveUpAgain 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}

