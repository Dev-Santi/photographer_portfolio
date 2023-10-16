import { dmSans } from "@/fonts/fonts";

interface props {
  children: string;
  styles: string;
}

export default function Tag({ children, styles }: props) {
  return (
    <span
      className={`${styles} ${dmSans.className} block max-w-[25rem] px-5
      py-2 uppercase font-bold text-white`}
    >
      {children}
    </span>
  );
}
