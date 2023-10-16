import Image from "next/image";
import { poppins } from "@/fonts/fonts";

export default function About() {
  return (
    <>
      <section className='flex flex-col md:flex-row-reverse md:justify-between gap-8'>
        <div className='md:max-w-[30rem]'>
          <Image
            src='/self_picture.jpg'
            alt='Foto de Alicia Larrosa.'
            width={800}
            height={800}
          />
        </div>
        <div>
          <h2>Sobre mí</h2>
          <p className={poppins.className + " " + "max-w-[35rem]"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            facilis ipsa nostrum vitae natus tempore aliquid repellat
            repudiandae autem minima, aliquam laborum? Deleniti nesciunt qui
            veritatis, omnis dolore repudiandae inventore.
          </p>
        </div>
      </section>
    </>
  );
}
