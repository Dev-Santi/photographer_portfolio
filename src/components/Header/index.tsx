import { poppins } from "@/fonts/fonts";
import Link from "next/link";
import Title from "./Title";
import Decoration from "./Decoration";
import "animate.css";
import SeeGalery from "../SeeGalery";

export default function Header() {
  return (
    <header className='xl:h-screen flex flex-col justify-between'>
      <span
        className={`${poppins.className} text-right mt-4 text-xl font-extralight mb-10 lg:text-2xl lg:m-10`}
      >
        <input
          className='bg-transparent font-medium text-blue-500 p-2 placeholder:text-center w-full text-center md:w-[18rem]'
          type='text'
          placeholder='Tu nombre aquí'
        />
      </span>
      <Title />
      <div className='w-full flex flex-col items-center md:flex-row-reverse justify-between md:items-start translate-x-[1rem]'>
        <Decoration />
        <SeeGalery />
      </div>
    </header>
  );
}
