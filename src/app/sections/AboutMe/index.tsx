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

type TimelineItemData = {
  date: string;
  text: string;
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

function TimelineItem({
  item,
  index,
  isLast,
  progress,
}: {
  item: TimelineItemData;
  index: number;
  isLast: boolean;
  progress: MotionValue<number>;
}) {
  const base = 0.42 + index * 0.07;
  const itemAnimation = useReveal(progress, createRange(base, 0.08), {
    fromY: 22,
    fromScale: 0.988,
  });
  const markerAnimation = useReveal(progress, createRange(base, 0.05), {
    fromScale: 0.6,
  });

  return (
    <motion.li
      className={`timeline-item ${isLast ? "pb-0!" : ""}`}
      style={itemAnimation}
    >
      <div className="timeline-info">
        <span>{item.date}</span>
      </div>

      <motion.div className="timeline-marker" style={markerAnimation} />

      <div className="timeline-content">
        <p>{item.text}</p>
      </div>
    </motion.li>
  );
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
                Sou <strong>Desenvolvedor Fullstack</strong> na MM Tech, no
                squad de <strong>Inovação e Eficiência Operacional</strong>.
                Atuo na criação de aplicações web, automações e integrações com
                foco em <strong>Inteligência Artificial</strong>, conectando
                produto, operação e tecnologia para reduzir trabalho manual e
                acelerar decisões.
              </motion.p>

              <motion.p style={paragraph2}>
                Trabalho com{" "}
                <strong>React, Next.js, Node.js, Python, Laravel</strong> e
                bancos relacionais, participando desde a modelagem técnica até
                a entrega em ambiente corporativo. Valorizo código claro,
                integração entre sistemas, versionamento com Git e ambientes
                reproduzíveis com Docker.
              </motion.p>

              <motion.p style={paragraph3}>
                Formado em{" "}
                <strong>Análise e Desenvolvimento de Sistemas</strong> pelo
                SENAC, busco construir soluções úteis para o negócio, simples
                de manter e preparadas para evoluir.
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
                    {timeline.map((item, index) => (
                      <TimelineItem
                        key={item.date}
                        item={item}
                        index={index}
                        isLast={index === timeline.length - 1}
                        progress={progress}
                      />
                    ))}
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
