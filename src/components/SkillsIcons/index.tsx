"use client";

const icons = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain" },
  { name: "Nuxt.js", icon: "devicon-nuxtjs-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Postgresql", icon: "devicon-postgresql-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
];

export default function SkillsIcons() {
  return (
    <div className="skills-icons">
      <div className="skills-track py-8">
        {[...icons, ...icons].map((item, index) => (
          <div key={index} className="skills-item">
            <i className={item.icon} />
            <span className="tooltip">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}