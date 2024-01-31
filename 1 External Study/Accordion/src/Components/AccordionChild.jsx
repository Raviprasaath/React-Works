
const AccordionChild = ( {content} ) => {
    return (
        <>
            {content.map((item)=> (
                <div className='py-2 border-b' key={item.card.info.id}>
                    <div className='flex justify-between items-center font-semibold p-2'>
                        <p>
                        {item.card.info.name}
                        </p>
                        <p>
                        ₹ {item.card.info.price / 100}.00
                        </p>
                    </div>
                    <div className='text-sm'>
                        {item.card.info.description}
                    </div>
                </div>
            ))}
        </>
  )
}

export default AccordionChild
