import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.RED_100};
  color: ${({theme}) => theme.COLORS.WHITE_200};
  height: 56px;
  border: 0;
  font-size: 14px;
  padding: 0 50px;  
  border-radius: 5px;
  font-weight: 500;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  svg {
    width: 26px;
    height: 22px;
  }
  &:disabled{
    opacity: 0.5;
  }
`;