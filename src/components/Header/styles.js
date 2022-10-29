import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 104px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 125px;
  white-space: nowrap;
  a{
    color: ${({theme}) => theme.COLORS.WHITE_200};
  }
  .gap {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 32px;
  }
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
  .buttons {
    display: flex;
    gap: 20px;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 37px;
  svg {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
`;