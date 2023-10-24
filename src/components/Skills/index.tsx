import AnimationWrap from "../AnimationWrap";
import SkillCard from "./SkillCard";

const skills = [
  {
    title: "Diseño Gráfico",
    text: `Creación de soluciones visuales para transmitir mensajes específicos.`,
    img: { src: "/design_skill.jpg", alt: "Diseñadora trabajando" },
  },
  {
    title: "Fotografía",
    text: `Poder transmitir emociones y contar historias visualmente impactantes que pueden resonar con la audiencia.`,
    img: { src: "/photo_skill.jpg", alt: "Fotógrafo trabajando" },
  },

  {
    title: "Marketing Digital",
    text: `Promoción de productos, marcas o servicios utilizando canales digitales y estrategias online.`,
    img: {
      src: "/marketing.jpg",
      alt: "Papeles con graficas y números",
    },
  },

  {
    title: "Edición",
    text: `Proceso de perfeccionar y mejorar imágenes digitales utilizando software especializado`,
    img: { src: "/video.jpg", alt: "Captura de un programa de edicion" },
  },
];

export default function Skills() {
  return (
    <section>
      <div className='hidden md:flex flex-row-reverse'>
        <div className='w-36 h-5 bg-grey'></div>
      </div>

      <h2>Habilidades</h2>
      <AnimationWrap
        animation='fade-up'
        className='flex flex-wrap gap-10 justify-between'
      >
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.title}
              title={skill.title}
              text={skill.text}
              img={skill.img}
            />
          );
        })}
      </AnimationWrap>
    </section>
  );
}
