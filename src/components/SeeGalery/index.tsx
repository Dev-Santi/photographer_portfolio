import Link from "next/link";

export default function SeeGalery() {
  return (
    <Link
      className={`border-2 animate__animated border-black p-2 tracking-widest text-xl mt-12 xl:mt-0 w-fit hover:bg-blue-400`}
      href='#works'
    >
      Ver galerías
    </Link>
  );
}
