import styled from 'styled-components'

export const Container = styled.div`
    display: fixed;
    margin-top: -435px;
    margin-left: 145px;
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    
    transition: transform 0.5s;
  }
  svg:hover {
    transform: scale(1.5)
  }
`;