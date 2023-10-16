import Image from "next/image";

interface props {
  title: string;
  text: string;
  img: { src: string; alt: string };
}

export default function SkillCard({ title, text, img }: props) {
  return (
    <div className='max-w-[25rem] p-2'>
      <h3 className='mb-4 font-bold'>{title}</h3>
      <p className='mb-4 max-w-[16rem]'>{text}</p>
      <div>
        <Image src={img.src} alt={img.alt} width={300} height={300} />
      </div>
    </div>
  );
}
