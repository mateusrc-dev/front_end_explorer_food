import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: "header" "content" "footer";
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
    width: 1400px;
    text-align: left;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    border-spacing: 0px;
    border-left: none;
    border-bottom: none;
    white-space: nowrap;
  }
  thead tr th:first-child {
    border-radius: 10px 0 0 0;
  }
  thead tr th {
    padding: 20px;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    width: 100%;
    height: 100%;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    }
    tbody tr td {
    padding: 20px;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    width: 100%;
    height: 100%;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';  
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    select {
      background-color: transparent;
      padding: 10px;
      border-radius: 5px;
      width: 200px;
      color: white;
      color: ${({theme}) => theme.COLORS.GRAY_300};
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
      text-align: left;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
    }
    option {
      color: ${({theme}) => theme.COLORS.GRAY_300};
      background: ${({theme}) => theme.COLORS.BACKGROUND_600};   
    }
    }
`;

