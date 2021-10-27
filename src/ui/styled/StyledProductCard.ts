import styled from 'styled-components';
import { ProductCard } from "../ProductCard";
import {borders} from "../shared/borders";

export const StyledProductCard = styled(ProductCard)`
  display: block;
  position: relative;
  overflow: hidden;
  a {
    text-decoration: none;
  }
  border: ${borders.cardBorder};
`;
