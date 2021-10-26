export const ProductCount = ({className, itemsCount} : Partial<any>) => {
 return (
     <div className={ className }>
       <span>{ itemsCount }</span> <span>articles</span>
     </div>
 );
};
