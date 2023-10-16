import Image from "next/image";

interface props {
  title: string;
  text: string;
  img: { src: string; alt: string };
}

export default function SkillCard({ title, text, img }: props) {
  return (
    <div className='max-w-[20rem] h-[23rem] flex flex-col justify-between p-2'>
      <div>
        {" "}
        <h3 className='mb-4 font-bold'>{title}</h3>
        <p className='mb-4 max-w-[20rem]'>{text}</p>
      </div>
      <div>
        <div>
          <Image src={img.src} alt={img.alt} width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
