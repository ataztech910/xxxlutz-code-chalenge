import styled from 'styled-components';
import { ProductGridLayouts } from "../ProductGridLayouts";

export const StyledProductGridLayouts = styled(ProductGridLayouts)`
  grid-template-columns: repeat(4,1fr);
  //padding: 0 1.5rem;
  justify-content: left;
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 1.5rem;
  width: 100%;
  max-width: 80.5rem;
  margin: 0 auto;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, minmax(320px, 1fr));  }
`;
