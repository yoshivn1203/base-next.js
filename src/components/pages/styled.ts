import styled from 'styled-components';
import { Collapse } from 'antd';

import mixins from '@/styles/global/mixins';

const { textStyle } = mixins;

export const Filter = styled(Collapse)`
  border: 1px solid red;
  padding: 10px 14px;

  .ant-collapse-header {
    padding: 0 !important;
    padding-top: 10px !important;
  }

  .ant-collapse-content-box {
    padding: 10px 0 !important;
  }

  .ant-collapse-item ~ .ant-collapse-item {
    border-top: 1px solid #e6e6e6;
  }
`;
