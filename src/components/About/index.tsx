import Image from "next/image";
import { poppins } from "@/fonts/fonts";

export default function About() {
  return (
    <section>
      <h2 className='mb-8'>
        Hola, <br /> Mi nombre es Alicia Larrosa
      </h2>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:min-w-[15rem]'>
          <Image
            src='/self_picture.jpg'
            alt='Foto de Alicia Larrosa.'
            width={800}
            height={800}
          />
        </div>
        <div>
          <h3>Sobre mí</h3>
          <p className={poppins.className}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            facilis ipsa nostrum vitae natus tempore aliquid repellat
            repudiandae autem minima, aliquam laborum? Deleniti nesciunt qui
            veritatis, omnis dolore repudiandae inventore.
          </p>
          <p className={poppins.className}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            veniam iste optio hic! Sed ex reprehenderit quis quisquam aperiam
            eligendi velit facere perspiciatis ducimus error, illum atque
            officiis dignissimos! Culpa!
          </p>
        </div>
      </div>
    </section>
  );
}
