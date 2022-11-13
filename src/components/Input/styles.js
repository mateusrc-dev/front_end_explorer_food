import styled from 'styled-components'

export const Container = styled.div`
@media (max-width: 600px) {
  width: 280px;
 }
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  input {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 100%;
    background: transparent;
    border: none;
    padding-left: 10px;
  }
  svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    width: 19.5px;
    height: 19.5px;
  }
  button {
    border: none;
    background: none;
    height: 100%;
    width: 50px;
    border-left: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_400};
    transition: all 1s;
  }

  button:hover {
    background: ${({theme}) => theme.COLORS.BACKGROUND_100};
  }
`;