import Image from "next/image";

export default function Title() {
  return (
    <div className='flex flex-col my-20 items-center md:flex-row md:justify-center'>
      <div className='max-w-[30rem] translate-x-[-2.4rem] md:translate-x-0'>
        <Image
          src='/profile_picture.png'
          alt='Foto en blanco y negro en la que se muestra el rostro de Alicia Larrosa.'
          width={800}
          height={800}
        />
      </div>
      <h1 className='uppercase translate-y-[-2rem] font-bold text-4xl sm:text-5xl text-center leading-[3rem] md:translate-y-0 md:translate-x-[-4rem] md:text-left md:text-6xl lg:text-8xl'>
        Momento
        <br />
        Creatividad
      </h1>
    </div>
  );
}
