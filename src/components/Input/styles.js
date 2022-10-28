import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 16px;
  input {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    padding-left: 16px;
    width: 100%;
    background: transparent;
    border: none;
  }
  svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    width: 19.5px;
    height: 19.5px;
  }
`;