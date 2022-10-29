import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px 50px auto 77px;
  grid-template-areas: "header" "back" "content" "footer";
`;

export const ButtonText = styled.a`
  margin-left: 125px;
  margin-top: 24px;
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
  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;

export const Main = styled.main`
  padding: 0 125px;
  grid-area: content;
  h1 {
    margin-top: 24px;
    margin-bottom: 24px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .imageAndNameDish{
    margin-top: 24px;
    display: flex;
    gap: 50px;
  }
  .imagedish{
    display: flex;
    flex-direction: column;
    gap: 8px;
    p{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
      label {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 300px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        background: transparent;
        border-radius: 5px;
        padding: 16px;
        height: 50px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
      input{
        display: none;
      }
      svg {
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
  }
  .namedish{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
      label {
        font-family: 'Roboto';
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
  .ingredientsAndPriceDish{
    margin-top: 24px;
    display: flex;
    gap: 50px;
  }
  .ingredients{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    p{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    .box{
      display: flex;
      align-items: center;
      gap: 20px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      background: transparent;
      border-radius: 5px;
      padding: 16px;
      min-height: 50px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
    .ingredient{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: 118px;
      height: 32px;
      background: ${({ theme }) => theme.COLORS.COLOR_BORDER_900};
      border-radius: 8px;
      button {
        background: none;
        border: none;
      }
      span{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color:  ${({ theme }) => theme.COLORS.WHITE_200};
      }
      svg{
        color:  ${({ theme }) => theme.COLORS.WHITE_200};
        width: 12px;
        height: 12px;
        margin-top: 5px;
      }
    }
    .add{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: 118px;
      height: 32px;
      background: transparent;
      border: 1px dashed  ${({ theme }) => theme.COLORS.GRAY_100};
      border-radius: 8px;
      button {
        background: none;
        border: none;
      }
      span{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
      svg{
        color:  ${({ theme }) => theme.COLORS.GRAY_100};
        width: 15px;
        height: 15px;
        margin-top: 5px;
      }
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 400px;
    label {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color:  ${({ theme }) => theme.COLORS.GRAY_300};
    }
    input {
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      background: transparent;
      border-radius: 5px;
      padding: 16px;
      height: 50px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }
  .textarea {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    p{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color:  ${({ theme }) => theme.COLORS.GRAY_300};
    }
    textarea{
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      background: transparent;
      border-radius: 5px;
      padding: 16px;
      height: 150px;
      color: ${({ theme }) => theme.COLORS.WHITE_200}; 
      resize: none;
    }
  }
  .button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .addrequest{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 357px;
      height: 48px;
      background: ${({ theme }) => theme.COLORS.COLOR_BORDER_900}; 
      opacity: 0.8;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE_200};
      border-radius: 5px;
      margin-top: 24px;
      margin-bottom: 24px;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE_200}; 
  }
`;