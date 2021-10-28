import { getValueByLanguage } from "../utils/getValueByLanguage";
import { useRef, useState} from "react";
import { useIntersection } from "../utils/intersectionHandler";
import {makeRandomImage} from "../utils/makeRandomImage";

export const ProductImage = ({className, image, title, isSale, id} : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    const [isInView, setIsInView] = useState(false);

    const imgRef = useRef<HTMLDivElement>(null);
    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    return (
        <div className={ className } >
            { isSale &&
                <div role="title" className="isSale">{getValueByLanguage("saleTitle", REACT_APP_LANG)}</div>
            }
            <div className="productImage" ref={imgRef} role="img">
                { isInView &&
                    <img
                        src={ makeRandomImage(image, id) }
                        alt={title}
                        width="320"
                        height="320"
                    /> }
            </div>
        </div>
    );
};
