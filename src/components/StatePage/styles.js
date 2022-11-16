import styled from 'styled-components'

export const Container = styled.div`
.statePage {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    scale: 1.5;
    transition: all 0.5s;
  }
  .statePage:hover {
    scale: 2.0;
    filter: brightness(0.8);
  }
`;

