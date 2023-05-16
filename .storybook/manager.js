import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'React Sortable Tree',
    brandUrl: 'https://github.com/vortilla/react-sortable-tree',
    gridCellSize: 12,
  }),
});
