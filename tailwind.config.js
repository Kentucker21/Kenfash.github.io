/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html','./public/js/*js'],
  theme: {
    extend: {
      screens:{
        'big':{'max':'1220px'},
        'medium':{'max':'900px'},
        'sub-med':{'max':'700px'},
        'small':{'max':'500px'},
        'widescreen':{'raw': '(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw': '(min-aspect-ratio:13/20)'},
      }
    },
    keyframes:{
      'open-menu':{
        '0%':{transform:'scaleY(0)'},
        '80%':{transform:'scaleY(1.2)'},
        '100%':{transform:'scaleY(1)'}
      },
    },
    animation:{
      'open-menu':'open-menu 0.5s ease-in-out forwards'
    }
  },
  plugins: [],
}
