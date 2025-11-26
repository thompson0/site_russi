"use client";

import Image from "next/image";

function BgImage() {
  return (
    <div className="absolute flex flex-col min-h-screen ">

      <Image
        src="/fundo.png" 
        alt="Background"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

    </div>
  );
}

export default BgImage;
