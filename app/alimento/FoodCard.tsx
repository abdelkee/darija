import Image from "next/image";
import { FoodDataType } from "../../types";

interface Props {
  alimento: FoodDataType;
}

function FoodCard({ alimento }: Props) {
  console.log(alimento);
  return (
    <div className="p-4 rounded-md shadow-md shadow-indigo-50 text-indigo-600 border-indigo-100 border-2 flex flex-col items-center space-y-4">
      <section
        title="IMAGE"
        className="w-full aspect-square rounded grid place-items-center"
      >
        <Image
          alt={alimento.es_title}
          src={alimento.image_url}
          width={100}
          height={0}
        />
      </section>
      <section title="INFO" className="text-lg font-semibold tracking-wide">
        <p>
          {alimento.ar_title} - {alimento.plural}
        </p>
      </section>
    </div>
  );
}

export default FoodCard;
