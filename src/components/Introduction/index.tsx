import Image from "next/image";
import { poppins } from "@/fonts/fonts";

export default function Introduction() {
  return (
    <section className='flex flex-col md:flex-row md:gap-5 md:items-center'>
      <div className='ml-[-1rem] mr-[-1rem] mb-10 md:mr-0'>
        <Image
          src='/intro_picture.jpg'
          alt='Foto de olas rompiendo en la playa en tono sepia.'
          width={768}
          height={768}
        />
        <div className='hidden md:block aspect-square bg-cream'></div>
      </div>
      <div className='flex flex-col justify-between md:h-[20rem]'>
        <div className='hidden md:flex justify-end items-center mr-[-1rem] mb-10'>
          <div className='w-36 h-5 bg-grey'></div>
          <div className='w-40 h-[2px] bg-black'></div>
        </div>
        <div>
          <h2>Introducción</h2>
          <p className={poppins.className}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            consectetur dolore dolorum culpa? Blanditiis aperiam repellat
            corporis numquam animi! Doloribus, voluptates accusamus adipisci
            incidunt eum saepe repellat maxime animi minus.
          </p>
          <br />
          <p className={poppins.className}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            tempore reprehenderit, et eum dolores maiores beatae sapiente dicta
            cumque, quis nisi illo? Nam iste eligendi vero totam consequatur
            quis excepturi!
          </p>
        </div>
      </div>
    </section>
  );
}
