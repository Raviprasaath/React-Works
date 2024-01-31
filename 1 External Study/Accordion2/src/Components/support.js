import { accordionContent } from "../constant";

export const filteredProducts = accordionContent.filter((item)=>item?.card?.card.itemCards);

export const mappedProducts = filteredProducts.map((item)=>item.card.card);