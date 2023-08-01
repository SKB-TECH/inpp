import React from "react";
import Image from "next/image";

function Card_Artiste({names,domaine}) {
  return (
    <section
      className="flex flex-col gap-4 font-p_regular justify-center items-center w-80 h-96 rounded-lg hover:bg-gray-200 hover:shadow"
      data-aos="flip-right"
    >
      <Image
        src={'/iconphoto.jpg'}
        width={150}
        height={150}
        className="rounded-full border-vert_25 border-2"
        alt="picture"
      />
      <h1 className="font-bold text-lg text-center uppercase font-p_bold text-blue">
        {names}
      </h1>
      
      <button className="w-56 h-10  rounded-lg text-orange font-bold border border-orange">
        <span>Discover</span>
      </button>
    </section>
  );
}

export default Card_Artiste;