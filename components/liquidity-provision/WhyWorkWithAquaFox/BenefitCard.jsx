import Image from "next/image";

export default function BenefitCard({ imageUrl, description, width }) {
  return (
    <div className="flex flex-col flex-1 shrink p-6 bg-blue-50 rounded basis-0 min-w-[240px] max-md:px-5">
      <Image height={50} width={width} src={imageUrl} alt={description}/>
      <div className="mt-5">{description}</div>
    </div>
  );
}
