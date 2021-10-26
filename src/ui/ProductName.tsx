export const ProductName = ({className, name, categoryName} : Partial<any>) => {
    return (
        <div className={ className }>
            <div>{ categoryName }</div>
            <div>{ name }</div>
        </div>
    );
};
