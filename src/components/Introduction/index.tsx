import Image from "next/image";
import { poppins } from "@/fonts/fonts";
import AnimationWrap from "../AnimationWrap";

export default function Introduction() {
  return (
    <section className='flex flex-col md:flex-row md:gap-5 md:items-center'>
      <div className='mb-10 mr-5'>
        <AnimationWrap alternative>
          <Image
            src='/intro_picture.jpg'
            alt='Foto de olas rompiendo en la playa en tono sepia.'
            width={768}
            height={768}
          />
        </AnimationWrap>

        <div className='hidden md:block aspect-square bg-cream'></div>
      </div>
      <div className='flex flex-col justify-between md:h-[20rem]'>
        <div className='hidden md:flex justify-end items-center mr-[-1rem] mb-10'>
          <div className='w-36 h-5 bg-grey'></div>
          <div className='w-40 h-[2px] bg-black'></div>
        </div>
        <div>
          <AnimationWrap>
            <h2>Introducción</h2>
          </AnimationWrap>
          <AnimationWrap>
            <p className={poppins.className}>
              Cada fotografía cuenta una historia única, una narrativa congelada
              en el tiempo que evoca emociones, captura la belleza y celebra la
              vida en todas sus formas.
            </p>
          </AnimationWrap>
          <br />
          <AnimationWrap>
            <p className={poppins.className}>
              Soy {'""'}, y te invito a explorar un mundo lleno de momentos
              preciosos, paisajes inspiradores y retratos que reflejan su
              esencia.
            </p>
          </AnimationWrap>
        </div>
      </div>
    </section>
  );
}
