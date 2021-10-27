import styled from 'styled-components';
import { ProductSorting } from "../ProductSorting";
import {colors} from "../shared/colors";

export const StyledProductSorting = styled(ProductSorting)`
position: relative;
cursor: pointer;
font-size: 14px;
.sortingValue{
    display: flex;
    align-items: center;
    padding: 1rem 0;
    div {
        line-height: 1; 
        img {
          width: 16px;
          height: 16px;
        }
    }
}
.sortingList {
  position: absolute;
  z-index: 10;
  background: ${colors.white};
  top: 2.5rem;
  left: -2rem;
  width: 160px;
  box-shadow: -1px 4px 15px 1px rgba(0,0,0,0.23);
  div {
    padding: .1rem 1rem;
    transition: 0.3s;
    text-align: center;
    &:hover {
      background: ${colors.softGray};
      color: ${colors.white}
    }
  }
}
`;
