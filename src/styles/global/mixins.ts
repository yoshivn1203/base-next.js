import { css } from 'styled-components';

type textStylesInterface = {
  size?: string;
  weight?: number;
  color?: string;
};

const textStyle = ({ size, weight, color }: textStylesInterface) => css`
  font-size: ${({ theme }) => size || theme.fontSize.base};
  font-weight: ${({ theme }) => weight || theme.fontWeight.medium};
  color: ${({ theme }) => color || theme.colors.accentInfo};
`;

const mixins = { textStyle };

export default mixins;
