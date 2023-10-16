import Link from "next/link";
import { AiFillPhone, AiTwotoneMail, AiFillInstagram } from "react-icons/ai";

export default function Contact() {
  return (
    <div className='flex flex-col mx-[-1rem] xl:m-0 xl:items-center'>
      <footer className='bg-cream px-5 py-16 xl:w-[99vw]'>
        <div className='max-w-[90rem] mx-auto'>
          <div className='flex justify-between mb-10'>
            <h2 className='uppercase'>¡Trabajemos juntos!</h2>
            <div className='hidden md:flex justify-end items-center mb-10'>
              <div className='w-36 h-5 bg-grey'></div>
              <div className='w-40 h-[2px] bg-black'></div>
            </div>
          </div>
          <ul className='flex flex-col md:flex-row gap-10'>
            <li>
              <Link
                className='flex gap-2 items-center text-lg transition-all hover:text-blue-400'
                href={"#"}
              >
                <AiFillPhone className={"text-3xl"} />
                +598-564-648
              </Link>
            </li>
            <li>
              <Link
                className='flex gap-2 items-center text-lg transition-all hover:text-blue-400'
                href={"#"}
              >
                {" "}
                <AiTwotoneMail className={"text-3xl"} />
                hola@micorreopersonalizado.com
              </Link>
            </li>
            <li>
              <Link
                className='flex gap-2 items-center text-lg transition-all hover:text-blue-400'
                href={"#"}
              >
                <AiFillInstagram className={"text-3xl"} />
                @miInstagramProfesional
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
