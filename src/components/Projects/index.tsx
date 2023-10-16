import Image from "next/image";
import Link from "next/link";
import works from "@/works";

export default function Projects() {
  return (
    <section id='works'>
      <h2 className='flex items-center'>
        <span className='mr-20'>Trabajos</span>
        <span className='block bg-darkCream w-full h-[1px] mt-5 mr-[-1rem]'></span>
      </h2>
      <div className='flex flex-wrap mb-10 gap-10 justify-between'>
        {works.map((work) => {
          return (
            <div key={work.link} className='relative cursor-pointer'>
              <Link href={work.link}>
                <Image src={work.image} alt='' width={300} height={300} />
                <div className='absolute inset-0 flex flex-col p-4 text-center items-center justify-center opacity-0 transition-all hover:backdrop-blur-[1px] hover:bg-[#000000a9] hover:opacity-100 text-white'>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <span className='block bg-darkCream h-[1px] ml-[-1rem] mr-[-1rem]'></span>
    </section>
  );
}
