import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
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

export const Main = styled.div`
  width: 100%;
  grid-area: content;
  h1{
    padding: 0 125px;
    margin: 34px 0;
  }
  table{
    border-radius: 10px 10px 0 0;
    margin: 0 125px;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    border-spacing: 0px;
    border-left: none;
    border-bottom: none;
    
    margin-bottom: 80px;
  }
  thead tr th:first-child {
    border-radius: 10px 0 0 0;
    padding: 0, 20px 0 0;
  }
  thead tr th {
    white-space: nowrap;
    text-align: left;
    padding: 20px 150px 20px 20px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    width: 100%;
    height: 100%;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    tbody tr td {
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    width: 100%;
    height: 100%;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';  
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    select {
      background-color: transparent;
      padding: 10px;
      border-radius: 5px;
      width: 200px;
      color: white;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      text-align: left;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
    }
    option {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_600};   
    }
    }
    button {
    position: absolute;
    margin-left: 60px;
    background-color: ${({theme}) => theme.COLORS.RED_200};
    color: ${({theme}) => theme.COLORS.WHITE_200};
    height: 30px;
    padding: 0 10px;
    border: 0;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
    font-family: 'Poppins';
    gap: 8px;
  svg {
    position: absolute;
    margin-left: 40px;
    margin-top: -20px;
    width: 26px;
    height: 22px;
  }
  }
`;

