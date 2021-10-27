import styled from 'styled-components';
import { ProductFlexLayouts } from "../ProductFlexLayouts";

export const StyledProductFlexLayouts = styled(ProductFlexLayouts)`
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.alignItems ? props.alignItems : "initial"};
`;
