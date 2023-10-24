import Image from "next/image";
import { poppins } from "@/fonts/fonts";
import AnimationWrap from "../AnimationWrap";

export default function About() {
  return (
    <>
      <section className='flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-8'>
        <div className='md:max-w-[30rem]'>
          <Image
            src='/self_picture.jpg'
            alt='Foto de Alicia Larrosa.'
            width={800}
            height={800}
          />
        </div>
        <AnimationWrap animation='fade-up'>
          <h2>Sobre mí</h2>
          <p className={poppins.className + " " + "max-w-[35rem]"}>
            Apasionado fotógrafo/a obsesionado/a con capturar la belleza efímera
            del mundo que nos rodea. <br />
            <br />A través de mi trabajo, aspiro a inspirar a otros a apreciar
            la belleza que nos rodea y a contemplar la profundidad de cada
            momento fugaz. Ya sea en retratos íntimos, eventos emocionantes o en
            la majestuosidad de la naturaleza. <br /> <br /> Me esfuerzo por
            transmitir una historia auténtica y dejar una impresión duradera en
            cada imagen.
          </p>
        </AnimationWrap>
      </section>
    </>
  );
}
