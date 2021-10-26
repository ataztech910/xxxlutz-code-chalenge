import { getValueByLanguage } from "../utils/getValueByLanguage";

export const ProductImage = ({className, image, title, isSale} : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    return (
        <div className={ className }>
            { isSale &&
                <div>{getValueByLanguage("sale", REACT_APP_LANG)}</div>
            }
            <div><img src={ image } alt={title} /></div>
        </div>
    );
};
