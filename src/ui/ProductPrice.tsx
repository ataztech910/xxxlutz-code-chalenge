import {getValueByLanguage} from "../utils/getValueByLanguage";

export const ProductPrice = ({className, price, previousPrice, isSale} : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    const conditionalClass = (): string => {
        return "regularPrice " + (isSale ? "isSalePrice" : "");
    }
    return (
        <div className={ className }>
            <div className={conditionalClass()}>{ price }:-</div>
            {
                isSale &&
                    <div className="oldPrice">{ getValueByLanguage("oldPrice", REACT_APP_LANG) } { previousPrice }:-</div>
            }
        </div>
    );
};
