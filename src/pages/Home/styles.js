import styled from 'styled-components'

export const Container = styled.div`
 @media (max-width: 600px) {
  height: 100%;
  min-width: 600px;
}
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: "header" "content" "footer";
  main::-webkit-scrollbar {
  width: 20px;
  }
  main::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  main::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  main {
    width: 100%;
    grid-area: content;
    overflow: auto;
  .none {
    display: none;
  }
  #title{
    @media (max-width: 600px) {
      padding: 48px 0px 40px;
  }
    padding: 48px 125px 40px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    animation: left 1s;
  }
  @keyframes left {
      0% {
        opacity: 0;
        transform: translateX(-20px)
      }
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
  .logoHome {
    @media (max-width: 600px) {
      width: 600px;
      margin: 100px 0 0 0;
      height: 150px;
  }
    margin: 0 auto;
    margin-top: 80px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    width: 1120px;
    height: 260px;
    display: flex;
    animation: topdown 1s;
    img {
      @media (max-width: 600px) {
      width: 200px;
      height: 150px;
      margin-top: 0px;
  }
      margin-top: -50px;
      margin-left: -40px;
    }
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
  .logoText{
    @media (max-width: 600px) {
    margin-left: -650px;
  }
    margin-left: -500px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
    justify-content: center;
    white-space: nowrap;
  h1 {
    @media (max-width: 600px) {
      font-size: 20px;
  }
      margin-left: 600px;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 40px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    p {
      margin-left: 600px;
      font-family: 'Poppins';
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }
  }
  .container {
    position: relative;
    margin: 0px 125px;
    height: 512px;
    animation: scale 1s;
    @media (max-width: 600px) {
      margin: 0;
      width: 600px;
    }
    @keyframes scale {
      0% {
        opacity: 0;
        transform: scale(1.2)
      }
      100% {
        opacity: 1;
        transform: scale(1.0)
      }
    }
    .arrowOne{
      position: absolute;
      width: 80px;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_000};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg{
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    button {
      background: none;
      border: none;
      transition: transform 1s;
    }
    button:hover {
      transform: scale(1.5);
    }
    }
    .arrowTwo{
      position: absolute;
      width: 80px;
      right: 0;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_300};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    button {
      background: none;
      border: none;
      transition: transform 1s;
    }
    button:hover {
      transform: scale(1.5);
    }
    }
  }
  .container:last-child{
    margin-bottom: 60px;
  }
  }
    .listFood{
      display: flex;
      overflow-x: hidden;
      scroll-behavior: smooth;
      width: 100%;
  }
  .listFoods{
    display: flex;
    flex-direction: row;
    gap: 27px;
    .cardFood{
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      width: 300px;
      height: 512px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        svg {
          width: 30px;
          height: 30px;
        }
      }
      p{
        margin: 18px auto 0px;
        width: 220px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        display: -webkit-box;
        text-overflow: ellipsis; 
        overflow: hidden; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
      }
      img {
        border-radius: 50%;
        width: 176px;
        height: 176px;
        margin: 10px 62px 16px 62px;
      }
      svg {
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        width: 18px;
        height: 18px;
    }
    .price {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 32px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.BLUE_200};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .amountAndButton {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 0 46px;
    }
    .amount{
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }
  
  }

`;

export const Header = styled.header`
 @media (max-width: 600px) {
  padding: 0px;
  height: 150px;
  width: 600px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 }
 .favorites{
  @media (max-width: 600px) {
  margin-left: 45px;
  margin-top: 0px;
 }
 }
  grid-area: header;
  height: 104px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 125px;
  white-space: nowrap;
  animation: topdown 1s;
  a{
    color: ${({theme}) => theme.COLORS.WHITE_200};
  }
 
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  .hexagon{
      min-width: 30.2px;
      min-height: 30.2px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
        @media (max-width: 600px) {
        position: absolute;
        margin-top: -10px;
        margin-left: 20px;
      }
  }
    span {
      font-family: 'Roboto';
      color: ${({theme}) => theme.COLORS.WHITE_200};
      font-weight: bold;
      font-size: 25px;
      padding-right: 25px;
      @media (max-width: 600px) {
        font-size: 0px;
      }
    }
  }
  .buttons {
    display: flex;
    gap: 15px;
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
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 10px;
  svg {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
`;

export const Input = styled.div`
@media (max-width: 600px) {
  width: 280px;
 }
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 16px;
  input {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 100%;
    background: transparent;
    border: none;
    padding-left: 16px;
  }
  svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    width: 19.5px;
    height: 19.5px;
  } 
`;