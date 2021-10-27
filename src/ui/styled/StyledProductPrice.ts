import styled from 'styled-components';
import { ProductPrice } from "../ProductPrice";
import { colors } from "../shared/colors";

export const StyledProductPrice = styled(ProductPrice)`
  color: ${colors.black};
  margin-right: 1.5rem;
  line-height: 1;
  font-weight: 600;
  text-align: right;
  .isSalePrice {
    color: ${colors.red};
  }
  .oldPrice {
    font-size: 10px;
    color: ${colors.softGray};
    text-decoration: line-through;
  }
`;
