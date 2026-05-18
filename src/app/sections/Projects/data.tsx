export interface Project {
  id: number;
  name: string;
  description: string;
  mockupSrc: string;
  mockupAlt: string;
  techs: string[];
  href: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "DRS ERP",
    description:
      "DRS (Data Resource System) by E2S Systems. ERP SaaS verticalizado para o varejo de comunicação visual, com suporte nativo a operações multi-filial e inteligência de dados. ",
    mockupSrc: "/images/projects/DRS_ERP.png",
    mockupAlt: "DRS ERP mockup",
    techs: ["PHP/Laravel", "Vue/Nuxt", "Tailwind/PrimeVue", "Docker"],
    href: "https://github.com/E2S-Systems/DRS",
  },
  {
    id: 2,
    name: "TO DO LIST",
    description:
      " Aplicação fullstack de To Do List constrúida com Laravel, Laravel Sail, e React para gerenciamento de tarefas diárias. ",
    mockupSrc: "/images/projects/todolist.png",
    mockupAlt: "TO DO LIST mockup",
    techs: ["Laravel", "React", "Laravel Sail", "Tailwind"],
    href: "https://github.com/MachadoEduardo/ToDoList",
  },
];