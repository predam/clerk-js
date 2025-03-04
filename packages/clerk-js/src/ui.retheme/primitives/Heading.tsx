import type { PrimitiveProps, StyleVariants } from '../styledSystem';
import { common, createVariants } from '../styledSystem';

const { applyVariants, filterProps } = createVariants(theme => ({
  base: {
    boxSizing: 'border-box',
    color: `${theme.colors.$colorText}`,
    margin: 0,
  },
  variants: {
    textVariant: { ...common.textVariants(theme) },
    as: {
      h1: {
        lineHeight: theme.lineHeights.$base,
      },
    },
  },
  defaultVariants: {
    as: 'h1',
    textVariant: 'xlargeMedium',
  },
}));

// @ts-ignore
export type HeadingProps = PrimitiveProps<'div'> & StyleVariants<typeof applyVariants> & { as?: 'h1' };

export const Heading = (props: HeadingProps) => {
  const { as: As = 'h1', ...rest } = props;
  return (
    <As
      {...filterProps(rest)}
      css={applyVariants(props) as any}
    />
  );
};
