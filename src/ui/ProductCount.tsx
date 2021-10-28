import { getValueByLanguage } from "../utils/getValueByLanguage";

export const ProductCount = ({className, itemsCount} : Partial<any>) => {
     const { REACT_APP_LANG } = process.env;
     return (
         <div className={ className } role="count">
           <span>{ itemsCount }</span> <span>{ getValueByLanguage("articlesCount", REACT_APP_LANG) }</span>
         </div>
     );
};
