import Image from "next/image";

export default function Decoration() {
  return (
    <Image
      priority={true}
      src='/decoration_1.png'
      alt='Imagen de decoración; una flecha hacia la izquierda y un rectangulo gris.'
      width={600}
      height={800}
    />
  );
}
