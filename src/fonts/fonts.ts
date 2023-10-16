import { Hanken_Grotesk, Poppins, DM_Sans } from "next/font/google";

export const hkGrotesk = Hanken_Grotesk({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export const dmSans = DM_Sans({ subsets: ["latin"] });
