import SkillCard from "./SkillCard";

const skills = [
  {
    title: "Diseño Gráfico",
    text: `Lorem ipsum dolor sit, corporis labore nobis.`,
    img: { src: "/skills/design.jpg", alt: "Diseñadora trabajando" },
  },
  {
    title: "Fotografía",
    text: `Lorem ipsum dolor sit, unde nulla corporis labore nobis.`,
    img: { src: "/skills/photo.jpg", alt: "Fotógrafo trabajando" },
  },

  {
    title: "Marketing Digital",
    text: `Lorem ipsum dolor sit, unde nulla corporis labore nobis.`,
    img: { src: "/skills/marketing.jpg", alt: "Fotógrafo trabajando" },
  },

  {
    title: "Edición de Video",
    text: `Lorem ipsum dolor sit, unde nulla corporis labore nobis.`,
    img: { src: "/skills/video.jpg", alt: "Fotógrafo trabajando" },
  },
];

export default function Skills() {
  return (
    <section>
      <div className='hidden md:flex flex-row-reverse'>
        <div className='w-36 h-5 bg-grey'></div>
      </div>

      <h2>Habilidades</h2>
      <div className='flex flex-wrap gap-10 justify-between'>
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
      </div>
    </section>
  );
}
