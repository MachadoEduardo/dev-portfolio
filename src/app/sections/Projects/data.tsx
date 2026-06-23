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
      "ERP SaaS verticalizado para empresas de comunicação visual, com suporte a operações multi-filial, organização de dados e fluxos internos do varejo. Atuei na construção de funcionalidades fullstack, integrações e experiência administrativa usando Laravel, Nuxt e Docker.",
    mockupSrc: "/images/projects/drs_erp.jpeg",
    mockupAlt: "Interface do DRS ERP",
    techs: ["PHP/Laravel", "Vue/Nuxt", "Tailwind/PrimeVue", "Docker"],
    href: "https://github.com/E2S-Systems/DRS",
  },
  {
    id: 2,
    name: "TO DO LIST",
    description:
      "Aplicação fullstack para gerenciamento de tarefas, criada para praticar uma arquitetura simples e funcional entre API Laravel e interface React. O projeto cobre cadastro, organização e atualização de tarefas em um ambiente reproduzível com Laravel Sail.",
    mockupSrc: "/images/projects/todolist.jpeg",
    mockupAlt: "Interface da aplicação To Do List",
    techs: ["Laravel", "React", "Laravel Sail", "Tailwind"],
    href: "https://github.com/MachadoEduardo/ToDoList",
  },
];
