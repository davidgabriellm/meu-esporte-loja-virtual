const Footer = () => {
  return (
    <div className="flex h-36 w-full flex-col items-center justify-center bg-gray-800 text-center lg:h-28">
      <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-3xl">
        <strong>Meu Esporte</strong>
      </span>
      <span className="mt-2 text-white md:text-[20px] lg:text-[15px]">
        © 2025 Todos os direitos reservados.
      </span>
    </div>
  );
};

export default Footer;
