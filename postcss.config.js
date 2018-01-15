module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-font-magician': {},
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