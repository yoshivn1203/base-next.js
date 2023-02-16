import styled, { css } from 'styled-components';

export interface ButtonPropsStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  isCancel?: boolean;
}

const ButtonCommon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.colors.buttonPrimaryDisabled};
    pointer-events: none;
  }
`;

export const ButtonPrimaryDefault = styled(ButtonCommon)<ButtonPropsStyles>`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.buttonPrimaryDefault};
  color: ${(props) => props.color || props.theme.colors.neutralWhite};
  font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
  font-weight: ${(props) =>
    props.fontWeight || props.theme.fontWeight.extraBold};

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonPrimaryHover};
  }

  ${(props) =>
    props.isCancel &&
    css`
      background-color: ${(props) => props.theme.colors.buttonPrimaryCancel};
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}

    ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
`;

export const ButtonSuccessDefault = styled(ButtonCommon)<ButtonPropsStyles>`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.buttonSuccessDefault};
  color: ${(props) => props.color || props.theme.colors.neutralWhite};
  font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
  font-weight: ${(props) =>
    props.fontWeight || props.theme.fontWeight.extraBold};

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonSuccessHover};
  }

  ${(props) =>
    props.isCancel &&
    css`
      background-color: ${(props) => props.theme.colors.buttonSuccessCancel};
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}

    ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
`;
