import Unocss from 'unocss/vite';
import { presetUno } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';

export default {
  vite: true,
  vitePlugins: [
    Unocss({
      presets: [presetUno()],
      transformers: [transformerDirective()],
      rules: [['ps', {}]],
    }),
  ],
  proxy: {
    '/api': {
      enable: true,
      changeOrigin: true,
      target: 'http://192.168.1.4:6001/',
      pathRewrite: {
        '^/api/': '/',
      },
    },
  },
  browserslist: '> 0.5%, last 2 versions',
};
