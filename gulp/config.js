module.exports = {
  paths: {
    project: './',
    css: {
      entry: './styles/main.scss',
      all: './styles/**/*.scss',
      dest: './css'
    }
  },
  names: {
    css: 'stylesheet.min.css'
  }
};

// ,
//     js: {
//       entry: './assets/js/local/app.js',
//       vendor: './assets/js/vendor/*.js',
//       dest: './assets/js',
//       all: './assets/js/**/*.js'
//     }

// js: {
//   app: 'app.min.js',
//   vendor: 'vendor.min.js'
// }