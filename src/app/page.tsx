import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-40 my-40'>
        <Introduction />
        <div className='bg-cream h-[1px] w-full'></div>
        <About />
        <div className='bg-cream h-[1px] w-full'></div>
        <Education />
        <div className='bg-cream h-[1px] w-full'></div>
        <Skills />
        <div className='bg-cream h-[1px] w-full'></div>
        <Experience />
        <div className='bg-cream h-[1px] w-full'></div>
        <Projects />
      </main>
      <Contact />
    </>
  );
}
