import About from "@/components/About";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-40 my-40'>
        <Introduction />
        <About />
      </main>
    </>
  );
}
