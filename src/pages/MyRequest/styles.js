import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
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
  main{
  grid-area: content;
  padding: 0 125px;
  display: flex;
  gap: 150px;
  overflow: auto;
  @media (max-width: 600px) {
    height: 100%;
    min-width: 600px;
    flex-direction: column;
    padding: 0;
    gap: 40px;
    margin-top: 46px;
 }
  h1{
    margin: 0px 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    animation: left 1s;
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
  }
  .titleTwo{
    margin: 0px 0 10px 0;
  }
  h2{
    margin-top: 20px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    animation: left 1s;
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
  }
  .requests{
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: left 1s;
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
  }
  .request{
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
  }
  .text{
    display: flex;
    align-items: center;
  }
  .Text{
    display: flex;
    flex-direction: column;
    a{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.RED_300};
    }
  }
  .name {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    margin-right: 10px;
  }
  .price {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_300}
  }
  .columnTwo{
   
    .headerTable{
      display:flex;
      width:580px;
    }
  .pix{
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
      background: transparent;
      border-radius: 5px 0 0 0;
      width: 300px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
      img{
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
  }
  .pixTwo{
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 5px 0 0 0;
      width: 300px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
      img{
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
  }
  .credit{
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
      background: transparent;
      border-radius: 0 5px 0 0;
      border-left: none;
      width: 300px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
      svg {
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
  }
  .creditTwo{
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 0 5px 0 0;
      border-left: none;
      width: 300px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
      svg {
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
  }
  .row{
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
      background: transparent;
      border-radius: 0 0 5px 5px;
      border-top: none;
      width: 580px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
  }
  .img {
    display: flex;
  }
  .imgnone{
    display:none;
  }
  .form {
    .input {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 30px;
    }
    .valAndCvc{
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
   
     
    label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color:  ${({ theme }) => theme.COLORS.GRAY_300};
    }
    input{
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      background: transparent;
      border-radius: 5px;
      padding: 16px;
      height: 50px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }
  .formnone {
    display: none;
  }
  .payOne {
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    svg {
      width: 104px;
      height: 104px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  .payTwo{
    display: none;
  }
  .alertOne{
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    svg {
      width: 104px;
      height: 104px;
    }
  }
  .alertTwo{
    display: none;
  }
  .buttonOne{
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    a{
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    .svg{
      width: 30px;
      height: 30px;
    }
    svg {
      width: 104px;
      height: 104px;
    }
  }
  .buttonTwo{
    display: none;
  }
  }
}
`;

export const ButtonText = styled(Link)`
  margin-top: 10px;
  white-space: nowrap;
  width: 300px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;

