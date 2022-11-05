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
      enable: false,
      changeOrigin: true,
      target: 'http://127.0.0.1:6001',
      pathRewrite: {
        '^/api/': '/path/',
      },
    },
  },
};
