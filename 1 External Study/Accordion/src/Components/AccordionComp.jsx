import { mappedProducts } from './support';
import AccordionHeader from './AccordionHeader';

const AccordionComp = () => {
    return (
        <>
            {mappedProducts.map((item, index)=>(
                <AccordionHeader key={index} value={item} />
            ))}
        </>
    )
}

export default AccordionComp
