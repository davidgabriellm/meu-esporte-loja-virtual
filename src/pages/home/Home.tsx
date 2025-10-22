import { useState, useEffect } from "react";
import { mock } from "../../../mock";

const Home = () => {
  const destaques = mock.filter((item) => item.isHighlighted);
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    if (destaques.length === 0) return;

    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % destaques.length);
    }, 2500);

    return () => clearInterval(intervalo);
  }, [destaques.length]);

  const trocarImagem = (novoIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setIndex(novoIndex);
      setFade(true);
    }, 300);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100">
      <h2 className="m-6 text-3xl font-bold">Nossos destaques</h2>

      <div className="relative w-[90%] overflow-hidden rounded-3xl bg-white p-6 shadow-lg lg:w-[65%]">
        <img
          key={index}
          src={destaques[index].image_url}
          alt={destaques[index].product_name}
          className={`mx-auto max-h-96 w-full object-contain transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute bottom-4 left-6 rounded-md bg-gray-800 p-3 text-white">
          <p className="font-bold md:text-[20px] lg:text-[15px]">
            {destaques[index].product_name}
          </p>
          <p className="text-green-400 md:text-[20px] lg:text-[15px]">
            Preço: R$ {destaques[index].product_price}
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {destaques.map((_, i) => (
          <button
            key={i}
            onClick={() => trocarImagem(i)}
            className={`h-3 w-3 cursor-pointer rounded-full md:h-5 md:w-5 lg:w-3 lg:h-3 ${
              index === i ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="mt-14 flex w-full flex-col items-center justify-center rounded-md bg-gray-200 p-9 shadow-sm lg:w-[70%] lg:mb-9">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-3xl">
          Bem-vindo ao Meu Esporte
        </h2>
        <p className="text-2xl text-gray-700 lg:text-xl">
          O Meu Esporte é o lugar certo para quem vive e respira esporte! Aqui
          você encontra uma variedade incrível de produtos esportivos, como
          chuteiras de alta performance, bolas oficiais, camisas de time e muito
          mais. Nossa missão é oferecer qualidade, conforto e estilo para você
          dar o seu melhor dentro e fora de campo. Navegue à vontade, escolha
          seus itens favoritos e prepare-se para elevar seu jogo. Estamos
          prontos para te atender com agilidade e dedicação. Boas compras e que
          a paixão pelo esporte esteja sempre com você!
        </p>
        <p className="mt-3 text-xl text-gray-700 md:text-[22px] lg:text-xl">
          Explore nossa loja e encontre tudo o que você precisa em um só lugar!
        </p>
      </div>
    </div>
  );
};

export default Home;
