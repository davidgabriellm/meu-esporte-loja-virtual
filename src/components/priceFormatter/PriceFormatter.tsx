interface PriceProps {
  value: number;
}


export default function PriceFormatter({ value }: PriceProps) {
  const [inteiro, decimal] = value.toFixed(2).split(".");

  return (
    <div className="flex items-start ">
      <span className="text-[18px] mr-0.5">R$</span>
      <span className="text-2xl font-bold">{inteiro}</span>
      <span className="text-sm self-start">{decimal}</span>
    </div>
  );
}