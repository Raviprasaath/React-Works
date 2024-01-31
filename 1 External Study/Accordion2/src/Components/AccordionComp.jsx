import { mappedProducts } from './support';
import AccordionHeader from './AccordionHeader';
import { useState } from 'react';

const AccordionComp = () => {
    const [showItem, setShowItem] = useState(null);
    const [product, setProduct] = useState(null);

    const toggleProduct = (value) => {
        setProduct(value === product ? null : value);
        setShowItem(value === showItem ? null : value);
    }

    return (
        <>
            {mappedProducts.map((item, index) => (
                <AccordionHeader 
                    key={index} 
                    singleProduct={toggleProduct} 
                    showItem={item.title === showItem} 
                    value={item} 
                />
            ))}
        </>
    );
}

export default AccordionComp
