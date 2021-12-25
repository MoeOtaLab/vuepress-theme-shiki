import type { ThemeObject } from '@vuepress/core';
import { path } from '@vuepress/utils';

export const ShikiTheme: ThemeObject = {
  name: '@moeota/vuepress-theme-shiki',
  extends: '@vuepress/theme-default',
  layouts: {
    profile: path.resolve(__dirname, 'layouts/Profile.vue'),
  },
};

export default ShikiTheme;
