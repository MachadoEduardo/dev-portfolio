"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

import SkillsIcons from "@/src/components/SkillsIcons";

const timeline = [
  {
    date: "Maio 2026",
    text: "Atuando na MMTech - Desenvolvedor Fullstack",
  },
  {
    date: "Agosto 2025",
    text: "Graduação em Análise e Desenvolvimento de Sistemas - SENAC",
  },
  {
    date: "Outubro 2024",
    text: "Atuando no GrupoMM — Suporte em Crédito e Cobrança",
  },
  {
    date: "Agosto 2024",
    text: "Atuando no GrupoMM — Estagiário TI",
  },
  {
    date: "Fevereiro 2023",
    text: "Início em Análise e Desenvolvimento de Sistemas - SENAC",
  },
];

type RevealOptions = {
  fromY?: number;
  fromScale?: number;
};

function useReveal(
  progress: MotionValue<number>,
  [start, end]: [number, number],
  options?: RevealOptions,
) {
  const shouldReduceMotion = useReducedMotion();

  const { fromY = 24, fromScale = 0.988 } = options || {};

  return {
    opacity: useTransform(progress, [start, end], [0, 1]),

    y: useTransform(
      progress,
      [start, end],
      shouldReduceMotion ? [0, 0] : [fromY, 0],
    ),

    scale: useTransform(
      progress,
      [start, end],
      shouldReduceMotion ? [1, 1] : [fromScale, 1],
    ),
  };
}

function createRange(start: number, duration: number): [number, number] {
  return [start, start + duration];
}

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 72%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.35,
  });

  const legend = useReveal(progress, createRange(0.0, 0.08), {
    fromY: 14,
    fromScale: 0.995,
  });

  const title = useReveal(progress, createRange(0.03, 0.09), {
    fromY: 18,
    fromScale: 0.992,
  });

  const paragraph1 = useReveal(progress, createRange(0.1, 0.1), {
    fromY: 18,
    fromScale: 0.992,
  });

  const paragraph2 = useReveal(progress, createRange(0.16, 0.11), {
    fromY: 18,
    fromScale: 0.992,
  });

  const paragraph3 = useReveal(progress, createRange(0.22, 0.12), {
    fromY: 18,
    fromScale: 0.992,
  });

  const skills = useReveal(progress, createRange(0.3, 0.12), {
    fromY: 20,
    fromScale: 0.99,
  });

  const timelineAnimations = timeline.map((_, index) => {
    const base = 0.42 + index * 0.07;

    return {
      item: useReveal(progress, createRange(base, 0.08), {
        fromY: 22,
        fromScale: 0.988,
      }),

      marker: useReveal(progress, createRange(base, 0.05), {
        fromScale: 0.6,
      }),
    };
  });

  return (
    <section id="sobre" ref={sectionRef} className="section-about-me">
      <div className="container">
        <div className="pr-0 lg:pr-12">
          <motion.div className="title-section-container" style={legend}>
            <p className="section-top-legend">Sobre mim</p>

            <motion.h2 className="section-title text-dev-white" style={title}>
              Resumo profissional
            </motion.h2>
          </motion.div>

          <div className="summary-experience-container">
            <div className="summary-about-me">
              <motion.p style={paragraph1}>
                Sou <strong>Desenvolvedor Fullstack</strong> na MM Tech, atuando
                no squad de <strong>Inovação e Eficiência Operacional</strong>,
                com foco em soluções utilizando{" "}
                <strong>Inteligência Artificial.</strong> Trabalho no
                desenvolvimento de aplicações web e integrações utilizando
                tecnologias como{" "}
                <strong>React, Next.js, Node.js, Python e Laravel.</strong>
              </motion.p>

              <motion.p style={paragraph2}>
                Atuação profissional em ambiente corporativo com{" "}
                <strong>
                  integração de sistemas, automatização de processos, inserção
                  de inteligência artificial.
                </strong>{" "}
                Familiarizado com boas práticas de qualidade de código{" "}
                <strong>(Clean Code, SOLID)</strong>, versionamento com Git e
                ambiente Docker.
              </motion.p>

              <motion.p style={paragraph3}>
                Formado em{" "}
                <strong>Análise e Desenvolvimento de Sistemas</strong> pela
                SENAC (2025), atualmente trabalhando na{" "}
                <strong>MM Tech.</strong>
              </motion.p>
            </div>
          </div>

          <motion.div style={skills}>
            <SkillsIcons />
          </motion.div>
        </div>

        <div className="experience-training">
          <div className="experience">
            <div className="experience-training-content container-fluid">
              <div className="row example-centered">
                <div>
                  <ul className="timeline timeline-centered">
                    {timeline.map((item, index) => {
                      const animation = timelineAnimations[index];

                      return (
                        <motion.li
                          key={item.date}
                          className={`timeline-item ${
                            index === timeline.length - 1 ? "pb-0!" : ""
                          }`}
                          style={animation.item}
                        >
                          <div className="timeline-info">
                            <span>{item.date}</span>
                          </div>

                          <motion.div
                            className="timeline-marker"
                            style={animation.marker}
                          />

                          <div className="timeline-content">
                            <p>{item.text}</p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
