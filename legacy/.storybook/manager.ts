import { addons } from '@storybook/manager-api';
import capdUiStorybookTheme from './capdUiStorybookTheme';

addons.setConfig({
  theme: capdUiStorybookTheme,
});
