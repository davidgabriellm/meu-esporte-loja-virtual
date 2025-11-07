
import PriceFormatter from "../priceFormatter/PriceFormatter";

// Supondo que o arquivo mock seja algo assim:
// const produtos = [ { id: 1, nome: "Produto 1", imagem: "url" }, ... ]
// Você apenas importa e passa como props.

export default function Carousel({ produtos }) {
  return (
    <div className="w-full overflow-x-auto flex scroll-smooth no-scrollbar gap-6 px-4 py-6 scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide [&::-webkit-scrollbar]:hidden">
      {produtos.map((p) => (
        <div
          key={p.ID}
          className="flex-shrink-0 w-[60%] md:w-1/3 lg:w-1/4 snap-start"
        >
          <div className="rounded-b-md overflow-hidden h-auto">
            <img
              src={p.image_url}
              alt={p.product_name}
              className="w-full h-48 object-contain"
            />
            <div className="p-3 flex flex-col gap-4">
              <p className="font-semibold text-sm">{p.product_name}</p>
              <span className="">{<PriceFormatter value={p.product_price}/>}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
