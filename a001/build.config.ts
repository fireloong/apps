import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';

export default {
  vite: true,
  vitePlugins: [
    Unocss({
      presets: [presetUno(), presetAttributify()],
      transformers: [transformerDirective()],
      rules: [['ps', {}]],
    }),
  ],
};
