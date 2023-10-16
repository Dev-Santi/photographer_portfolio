import Image from "next/image";

export default function Experience() {
  return (
    <section>
      <h2>Experiencia</h2>
      <div className='flex flex-wrap justify-between gap-10'>
        <div className='max-w-[25rem] p-2'>
          <h3>Diseñadora web</h3>
          <h4 className='mt-[-2.5rem] font-extralight mb-5'>
            Nombre de la empresa
          </h4>
          <p className='mb-4 max-w-[16rem]'>
            Experiencia en la creación de sitios web visualmente atractivos y
            funcionales.
          </p>
          <div>
            <Image
              src='/experience/design.jpg'
              alt='Fotografía de una persona frente a una pc trabajando en un diseño.'
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className='max-w-[25rem] p-2'>
          <h3>Fotógrafa</h3>
          <h4 className='mt-[-2.5rem] font-extralight mb-5'>
            Nombre de la empresa
          </h4>
          <p className='mb-4 max-w-[16rem]'>
            He perfeccionado mi capacidad para comunicar emociones a través de
            imágenes.
          </p>
          <div>
            <Image
              src='/experience/photo.jpg'
              alt='Fotografía de una persona frente a una pc trabajando en un diseño.'
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className='max-w-[25rem] p-2'>
          <h3>Editora</h3>
          <h4 className='mt-[-2.5rem] font-extralight mb-5'>
            Nombre de la empresa
          </h4>
          <p className='mb-4 max-w-[18rem]'>
            He trabajado en diversos proyectos, tanto retoque de retratos como
            manipulación creativa de fotografías.
          </p>
          <div>
            <Image
              src='/experience/edit.jpg'
              alt='Fotografía de una persona frente a una pc trabajando en un diseño.'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
