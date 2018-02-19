module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-font-magician': {
      formats: 'woff',
      variants: {
        'Lato': {
            '300': [],
            '400': [],
            '900': []
        },
        'Karla': {
          '300': [],
          '400': [],
          '900': []
        },          
      }
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-media-fn' : {},
    'postcss-discard-comments': {},
    'postcss-reporter': {
        clearReportedMessages: true
    }
  },
};