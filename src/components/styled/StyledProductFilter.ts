import styled from 'styled-components';
import { ProductFilter } from "../ProductFilter";
import { colors } from "../../ui/shared/colors";

export const StyledProductFilter = styled(ProductFilter)`
  flex: 1;
  padding: 0 2rem;    
  input {
      width: 100%;
      font-size: 12px;
      padding: 0.3rem;
      border: 1px solid ${colors.border};
      outline: none;
    }
`;
