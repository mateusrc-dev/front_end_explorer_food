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
  animation: topdown 1s;
  
  a{
    color: ${({theme}) => theme.COLORS.WHITE_200};
  }
  .gap {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 25px;
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
    gap: 10px;
  }
  @keyframes topdown {
      0% {
        opacity: 0;
        transform: translateY(-20px)
      }
      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }
  .none {
    display: none;
  }

  .searchAlert {
    position: absolute;
    background: ${({theme}) => theme.COLORS.BLUE_100};
    font-family: 'Roboto';
    color: ${({theme}) => theme.COLORS.WHITE_200};
    font-weight: bold;
    font-size: 16px;
    right: 0px;
    top: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 120px;
    white-space: normal;
    padding: 10px;
    text-align: center;
    border-radius: 0px 0 8px 8px;
    animation: leftAlert 1s;
  }
  .svgAlert {
    width: 50px;
    height: 50px;
  }
  @keyframes leftAlert {
    0% {
        opacity: 0;
        height: 0;
      }

      100% {
        opacity: 1;
        height: 120px;
      }
    }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 20px;
  svg {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
`;