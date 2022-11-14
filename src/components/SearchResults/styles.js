import styled from 'styled-components'

export const Container = styled.div`
  
  .searchResults{
    position: absolute;
    top: 76px;
    left: 465px;
    //background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    //border-radius: 5px 5px 10px 10px;

    width: 276px;
    .li {
      list-style-type: none;
      display: flex;
      align-items: center;
      padding: 5px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      transition: all 0.3s;
    }
    .li:first-child {
      border-radius: 10px 10px 0 0;
    }
    .li:last-child {
      border-radius: 0 0 10px 10px;
    }
    .li:hover {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100}; 
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
    p {
      padding: 0 10px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      transition: all 0.3s;
      cursor: pointer;
    }
  }
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .trash {
    position: absolute;
    right: 15px;
    cursor: pointer;
    padding-top: 4px;
  }
  .none {
    display: none;
  }
`;