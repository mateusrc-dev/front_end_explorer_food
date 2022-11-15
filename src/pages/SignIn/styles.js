import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    min-width: 600px;
  }
  header {
    margin-left: 150px;
    display: flex;
    align-items: center;
    gap: 19px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    @media (max-width: 600px) {
    margin-left: 0px;
  }
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      width: 50px;
      height: 50px;
    }
  }
  .createLogin{
    margin-right: 108px;
    border-radius: 16px;
    width: 476px;
    height: 600px;
    padding: 110px 64px 30px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    h1{
      margin-bottom: 32px;
      text-align: center;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 32px;
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
    a:last-child{
      margin-top: 10px;
    }
    a{
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      margin-top: 32px;
    }
    .input{
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 32px;
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
  }
  
`;