import Image from "next/image";
import Tag from "./Tag";

export default function Education() {
  return (
    <section className='flex flex-col-reverse md:flex-row-reverse gap-10 items-center justify-between'>
      <div>
        <h2>Educación</h2>
        <div className='mb-16'>
          <Tag styles='bg-darkCream mb-10'>Facultad de Artes || UDELAR</Tag>
          <p className='md:max-w-[35rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam
            quibusdam nihil doloribus voluptatibus iure in alias deleniti eos
            reiciendis architecto labore autem.
          </p>
        </div>
        <div>
          <Tag styles='bg-black mb-10'>Escuela Uruguaya de Fotografía</Tag>
          <p className='md:max-w-[35rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam
            quibusdam nihil doloribus voluptatibus iure in alias deleniti eos
            reiciendis architecto labore autem.
          </p>
        </div>
      </div>
      <div className='md:max-w-[28rem]'>
        <Image
          src='/education_picture.jpg'
          alt='Fotografía de una chica estudiando en una librería.'
          width={800}
          height={800}
        />
      </div>
    </section>
  );
}
