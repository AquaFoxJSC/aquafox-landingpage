export default function BenefitCard({ imageUrl, description }) {
    return (
      <div className="flex flex-col flex-1 shrink p-6 bg-blue-50 rounded basis-0 min-w-[240px] max-md:px-5">
        <img
          loading="lazy"
          src={imageUrl}
          alt={description}
          className="object-contain aspect-square w-[50px]"
        />
        <div className="mt-5">{description}</div>
      </div>
    );
  }