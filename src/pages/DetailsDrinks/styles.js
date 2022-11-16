import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px 50px auto 77px;
  grid-template-areas: "header" "back" "content" "footer";
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
`;

export const ButtonText = styled(Link)`
  margin-left: 125px;
  margin-top: 50px;
  width: 100px;
  grid-area: back;  
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  @media (max-width: 600px) {
  margin-top: 70px;
  margin-left: 0;
 }
  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;

export const Main = styled.main`
  grid-area: content;
  padding: 0 125px;
  display: flex;
  align-items: center;
  gap: 50px;
  animation: scale 1s;
  @media (max-width: 600px) {
  padding: 0px;
  width: 600px;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 40px;
 }
 
 .image {
  @media (max-width: 600px) {
  margin-top: 450px;
 }
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
  .textDetails {
    @media (max-width: 600px) {
  margin-bottom: 50px;
 }
    width: 550px;
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
    margin-bottom: 8px;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
}
  .ingredients {
    display: flex;
    align-items: end;
    gap: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    margin-bottom: 45px;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }
  .finishBuy {
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 50px;
    padding-right: 160px;
  }
  .price {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }
  .amount{
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .image {
    border-radius: 50%;
    width: 350px;
    height: 350px;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 18px;
    height: 18px;
  }
  .none {
    display: none;
  }
`;