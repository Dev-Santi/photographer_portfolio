const imagenes: string[] = [];
let contador = 1;
for (let i = 0; i < 20; i++) {
  imagenes.push("Imagen " + contador);
  contador++;
}

export default function Galery() {
  return (
    <section className='my-24 w-full'>
      <h3>Galería</h3>
      <ul className='grid gap-10 justify-center sm:grid-cols-3 md:grid-cols-4'>
        {imagenes.map((content) => {
          return (
            <li key={content}>
              <div className='border-2 border-black w-[12rem] h-[20rem]'>
                <h4 className='h-full flex justify-center items-center'>
                  {content}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
