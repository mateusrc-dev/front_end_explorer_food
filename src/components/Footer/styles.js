import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  grid-area: footer;
  width: 100%;
  height: 77px;
  padding: 0 125px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    gap: 11px;
    span {
      color: ${({ theme }) => theme.COLORS.COLOR_FOOTER};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 29px;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.COLOR_FOOTER};
      width: 29.2px;
      height: 29.2px;
    }
  }
  span {
    font-family: 'DM Sans';
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;