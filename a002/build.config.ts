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
};
