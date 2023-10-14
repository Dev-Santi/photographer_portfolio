import { poppins } from "@/fonts/fonts";
import Link from "next/link";
import Title from "./Title";
import Decoration from "./Decoration";

export default function Header() {
  return (
    <header className='xl:h-screen flex flex-col justify-between'>
      <span
        className={`${poppins.className} text-right text-xl font-extralight mb-10 lg:text-2xl lg:m-10`}
      >
        Alicia Larrosa
      </span>
      <Title />
      <div className='w-full flex flex-col items-start md:flex-row-reverse justify-between md:items-center translate-x-[1rem]'>
        <Decoration />
        <Link
          target='_blank'
          className='tracking-widest text-xl mt-12 xl:mt-0 w-fit hover:text-blue-500 hover:underline'
          href='https://www.flickr.com/'
        >
          www.flikr.com
        </Link>
      </div>
    </header>
  );
}
