export const ProductCard = ({className, url, children} : Partial<any>) => {
return (
    <div className={ className } role="card">
        <a href={url}>
            { children }
        </a>
    </div>
);
}
