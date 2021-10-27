import { getValueByLanguage } from "../utils/getValueByLanguage";
import {MutableRefObject, useRef, useState} from "react";
import { useIntersection } from "../utils/intersectionHandler";

export const ProductImage = ({className, image, title, isSale, id} : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    const [isInView, setIsInView] = useState(false);

    const imgRef = useRef<HTMLDivElement>(null);
    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    const makeRandomImage = (image: string, id: number) => {
        return `${image}?id=${id}`;
    }

    return (
        <div className={ className } >
            { isSale &&
                <div className="isSale">{getValueByLanguage("saleTitle", REACT_APP_LANG)}</div>
            }
            <div className="productImage" ref={imgRef}>
                {isInView &&
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
