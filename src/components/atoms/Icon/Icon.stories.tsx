import type { Meta } from '@storybook/react';
import { Icon, iconRecipe } from './Icon';
import { css } from '../../../../styled-system/css';
import { Box, Flex } from '../../../../styled-system/jsx';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const iconSizeRange = (
  <Flex flexFlow={'row'} align={'center'} gap={'8'}>
    {Array.from(iconRecipe.variantMap.size).map((size) => (
      <Box borderWidth={1} borderColor={'stone.200'}>
        <Icon
          key={size}
          name={'bolt'}
          size={size}
          className={css({ color: 'stone.500' })}
        />
      </Box>
    ))}
  </Flex>
);

export const IconSizes = {
  render: () => iconSizeRange,
};
