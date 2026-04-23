"use client";

const icons = [
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain" },
  { name: "Nuxt.js", icon: "devicon-nuxtjs-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Vite", icon: "devicon-vitejs-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Sass", icon: "devicon-sass-original" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "C#", icon: "devicon-csharp-plain" },
  { name: ".NET", icon: "devicon-dotnetcore-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
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