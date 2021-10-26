export const ProductPrice = ({className, price, previousPrice} : Partial<any>) => {
    return (
        <div className={ className }>
            <div>{ price }</div>
            <div>{ previousPrice }</div>
        </div>
    );
};
