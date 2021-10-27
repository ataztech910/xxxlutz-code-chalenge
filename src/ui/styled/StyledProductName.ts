import styled from 'styled-components';
import { ProductName } from "../ProductName";
import { colors } from "../shared/colors";

export const StyledProductName = styled(ProductName)`
  color: ${colors.black};
  text-transform: uppercase;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  padding-right: .25rem;
  font-weight: 600;
  line-height: 1;
  max-width: 48%;
`;
