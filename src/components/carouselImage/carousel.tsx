
import { Product } from "../../interface/product";
import PriceFormatter from "../priceFormatter/PriceFormatter";
import TitleCase from "../titleCase/TitleCase";


interface CarouselProps {
  produtos: Product[];
}
export default function Carousel({ produtos }: CarouselProps) {
  return (
    <div className="w-full overflow-x-auto flex no-scrollbar gap-6 px-4 py-6 scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide [&::-webkit-scrollbar]:hidden">
      {produtos.map((p) => (
        <div
          key={p.id}
          className="flex-shrink-0 w-[60%] md:w-1/3 lg:w-1/4 snap-start"
        >
          <div className="rounded-b-md overflow-hidden h-auto">
            <img
              src={p.image_url}
              alt={p.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-3 flex flex-col gap-4">
              <TitleCase text={p.name} className="line-clamp-1"/>
              <span className="">{<PriceFormatter value={p.price}/>}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
