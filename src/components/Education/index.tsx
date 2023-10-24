import Image from "next/image";
import Tag from "./Tag";
import AnimationWrap from "../AnimationWrap";

export default function Education() {
  return (
    <section className='flex flex-col-reverse md:flex-row-reverse gap-10 items-center justify-between'>
      <AnimationWrap animation='fade-up'>
        <h2>Educación</h2>
        <div className='mb-16'>
          <Tag styles='bg-darkCream mb-10'>Facultad de Artes || UDELAR</Tag>
          <p className='md:max-w-[35rem]'>
            Se me ha brindado de una base sólida para explorar mi creatividad y
            expresión artística, permitiéndome llevar a cabo proyectos
            innovadores y desafiantes que han recibido reconocimiento en varios
            eventos.
          </p>
        </div>
        <div>
          <Tag styles='bg-black mb-10'>Escuela Uruguaya de Fotografía</Tag>
          <p className='md:max-w-[35rem]'>
            Adquirí una comprensión profunda de los fundamentos técnicos y
            artísticos de la fotografía. Aprendí a dominar aspectos clave como
            la exposición, el enfoque, la composición y la iluminación, lo que
            me ha permitido capturar imágenes impactantes y visualmente
            atractivas.
          </p>
        </div>
      </AnimationWrap>
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
