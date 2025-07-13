import { css } from '@emotion/react';

export const global = css`
  * {
    font-family: 'Nanum Gothic', sans-serif;
  }

  /* antd 기본 폰트 크기 복원 */
  body {
    font-size: 14px;
    line-height: 1.5715;
  }

  /* antd 컴포넌트들의 기본 폰트 크기 보장 */
  .ant-btn,
  .ant-input,
  .ant-form-item-label > label,
  .ant-modal-title,
  .ant-typography {
    font-size: 14px;
  }

  /* antd Typography 컴포넌트 크기 조정 */
  .ant-typography h1 {
    font-size: 38px;
  }
  .ant-typography h2 {
    font-size: 30px;
  }
  .ant-typography h3 {
    font-size: 24px;
  }
  .ant-typography h4 {
    font-size: 20px;
  }
  .ant-typography h5 {
    font-size: 16px;
  }
`;
