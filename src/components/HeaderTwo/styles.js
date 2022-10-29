import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 104px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;;
  padding: 0 125px;
  white-space: nowrap;
  .logo {
    display: flex;
    align-items: center;
    
    gap: 11px;
    padding-right: 37px;
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      width: 29.2px;
      height: 29.2px;
    }
    span {
      font-family: 'Roboto';
      color: ${({theme}) => theme.COLORS.WHITE_200};
      font-weight: bold;
      font-size: 25px;
    }
  }
  .adm{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color:  ${({theme}) => theme.COLORS.GRAY_300};
  }
`;
