import styled from 'styled-components';
import { colors } from "../shared/colors";
import { ProductBrand } from "../ProductBrand";

export const StyledProductBrand = styled(ProductBrand)`
  color: ${colors.softGray};
  font-size: .75rem;
  font-weight: 300;
  min-height: 1.5rem;
  margin: 0 1.5rem;
 `;
