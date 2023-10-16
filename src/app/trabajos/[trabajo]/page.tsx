import Tag from "@/components/Education/Tag";
import Galery from "@/components/Galeria";
import works from "@/works";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

interface props {
  params: {
    trabajo: string;
  };
}

export default function page({ params }: props) {
  const work = works.find((e) => e.title.toLowerCase() === params.trabajo);

  if (work) {
    return (
      <main className='flex flex-col items-start'>
        <Link
          scroll={false}
          className='flex items-center gap-4 font-medium text-lg my-5 hover:text-blue-400'
          href='/'
        >
          <BsArrowLeft />
          Volver
        </Link>
        <section className='flex flex-col-reverse md:flex-row-reverse gap-10 items-center'>
          <div>
            <h2>{work.title}</h2>
            <div className='mb-16'>
              <Tag styles='bg-darkCream mb-10'>{work.tag}</Tag>
              <p className='md:max-w-[35rem]'>{work.longDescription}</p>
            </div>
          </div>
          <div className='md:max-w-[28rem]'>
            <Image src={work.image} alt={work.alt} width={800} height={800} />
          </div>
        </section>
        <Galery />
      </main>
    );
  } else {
    return (
      <>
        <Link
          className='flex items-center gap-4 font-medium text-lg my-5'
          href='/'
        >
          <BsArrowLeft />
          Volver
        </Link>
        <h1>Trabajo no encontrado, presione Volver para regresar.</h1>
      </>
    );
  }
}
