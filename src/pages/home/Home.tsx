import { useState, useEffect } from 'react';
import { mock } from '../../../mock';

const Home = () => {
  const destaques = mock.filter((item) => item.isHighlighted); // <- só os destacados
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
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold m-6">Nossos destaques</h2>

      <div className="relative bg-white rounded-3xl shadow-lg w-[90%] p-6 overflow-hidden">
        <img
          key={index}
          src={destaques[index].image_url}
          alt={destaques[index].product_name}
          className={`w-full max-h-96 object-contain mx-auto transition-opacity duration-500 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute bottom-4 left-4 bg-gray-800 text-white p-3 rounded-md">
          <p className="font-bold">{destaques[index].product_name}</p>
          <p className="text-green-400">Preço: R$ {destaques[index].product_price}</p>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        {destaques.map((_, i) => (
          <button
            key={i}
            onClick={() => trocarImagem(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      <div className='w-full flex justify-center items-center flex-col bg-gray-200 rounded-md p-9 shadow-sm mt-14'>
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Bem-vindo ao Meu Esporte</h2>
        <p className='text-xl text-gray-700'>
          O Meu Esporte é o lugar certo para quem vive e respira esporte! Aqui você encontra uma variedade incrível de produtos esportivos, como chuteiras de alta performance, bolas oficiais, camisas de time e muito mais. Nossa missão é oferecer qualidade, conforto e estilo para você dar o seu melhor dentro e fora de campo. Navegue à vontade, escolha seus itens favoritos e prepare-se para elevar seu jogo. Estamos prontos para te atender com agilidade e dedicação. Boas compras e que a paixão pelo esporte esteja sempre com você!
        </p>
        <p className='text-xl text-gray-700'>Explore nossa loja e encontre tudo o que você precisa em um só lugar!</p>
      </div>
    </div>
  );
};

export default Home;
