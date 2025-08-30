import { mock } from "../../../mock"


const AllProducts = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-10 px-52 py-8 bg-gray-100 justify-center items-center">
      {mock.map((product) => (
        <div className="bg-gray-50 rounded-2xl shadow-lg p-3">
          <img src={product.image_url} className="w-full h-80"/>
          <div className="flex justify-center flex-col items-center gap-2">
            <h2 className="h-12">{product.product_name}</h2>
            <span className="text-left w-full">{product.product_price}</span>
            <button className="bg-blue-700 p-1 rounded-lg w-3/4 text-white">Adicionar ao carrinho</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllProducts