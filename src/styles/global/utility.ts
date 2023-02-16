import { css } from 'styled-components';

const utility = css`
  /* ANTD checkbox */
  .ant-checkbox-group {
    display: grid !important;
  }
  .ant-checkbox-group-item + .ant-checkbox-group-item {
    margin-left: 0;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.primaryYellow};

    border-color: ${({ theme }) => theme.colors.primaryYellow};
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.primaryYellow} !important;
  }

  .ant-checkbox-checked:after {
    border: none !important;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.primaryYellow} !important;
  }
`;
export default utility;
