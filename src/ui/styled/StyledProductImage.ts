import styled from 'styled-components';
import { ProductImage } from "../ProductImage";
import {colors} from "../shared/colors";

export const StyledProductImage = styled(ProductImage)`
  position: relative;
  .isSale {
    position: absolute;
    top: -20px;
    left: 5px;
    display: inline-block;
    flex-wrap: wrap;
    cursor: default;
    z-index: 10;
    background: ${colors.main};
    line-height: 1;
    padding: 0.5rem;
    color: ${colors.white};
    font-size: 11px;
  }
  .productImage {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem;
    &:before {
      display: block;
      padding-top: 100%;
      content: "";
    }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        color: #0f0f0f;
        line-height: 1.5;
        object-fit: contain;
        text-align: center;
      }
  }
`;
