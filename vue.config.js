module.exports = {
  lintOnSave: false,
  pluginOptions: {
    svgSprite: {
      /*
             * The directory containing your SVG files.
             */
      dir: 'src/assets/icons',
      /*
             * The reqex that will be used for the Webpack rule.
             */
      test: /\.(svg)(\?.*)?$/,
      /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
      pluginOptions: {
        plainSprite: true
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/_main.sass"'
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
};
