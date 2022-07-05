module.exports = {
   content: ["./views/**/*.{ejs, html,js}"],
   theme: {
    screens: {
      '2xl': {'max': '2000px'},
      'xl': {'max': '1200px'},
      'lg': {'max': '1000px'},
      'md': {'max': '750px'},
      'sm': {'max': '450px'},
      'xs': {'max': '375px'},
    },
     extend: {},
   },
   plugins: [],
}