export const ProductCard = ({className, url, children} : Partial<any>) => {
return (
    <div className={ className }>
        <a href={url}>
            { children }
        </a>
    </div>
);
}
