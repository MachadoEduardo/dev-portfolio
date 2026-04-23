"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import SkillsIcons from "@/src/app/components/SkillsIcons";

const timeline = [
    {
        date: "Agosto 2025",
        text: "SENAC — Bacharel em ADS",
    },
    {
        date: "Outubro 2024",
        text: "GrupoMM — Suporte em Crédito e Cobrança",
    },
    {
        date: "Agosto 2024",
        text: "GrupoMM — Estagiário TI",
    },
    {
        date: "Fevereiro 2023",
        text: "Curso SENAC — Análise e Desenvolvimento de Sistemas",
    },
];

function useRevealRange(
    progress: ReturnType<typeof useScroll>["scrollYProgress"],
    start: number,
    end: number,
    fromY = 24,
    fromScale = 0.988,
) {
    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [fromY, 0]);
    const scale = useTransform(progress, [start, end], [fromScale, 1]);

    return { opacity, y, scale };
}

function useTimelineMarkerRange(
    progress: ReturnType<typeof useScroll>["scrollYProgress"],
    start: number,
    end: number,
) {
    const opacity = useTransform(progress, [start, end], [0, 1]);
    const scale = useTransform(progress, [start, end], [0.6, 1]);

    return { opacity, scale };
}

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 92%", "end 72%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.35,
    });

    const legend = useRevealRange(smoothProgress, 0.00, 0.08, 14, 0.995);
    const title = useRevealRange(smoothProgress, 0.03, 0.12, 18, 0.992);

    const paragraph1 = useRevealRange(smoothProgress, 0.10, 0.20, 18, 0.992);
    const paragraph2 = useRevealRange(smoothProgress, 0.16, 0.27, 18, 0.992);
    const paragraph3 = useRevealRange(smoothProgress, 0.22, 0.34, 18, 0.992);

    const skills = useRevealRange(smoothProgress, 0.30, 0.42, 20, 0.99);

    const timeline1 = useRevealRange(smoothProgress, 0.40, 0.48, 22, 0.988);
    const timeline2 = useRevealRange(smoothProgress, 0.45, 0.53, 22, 0.988);
    const timeline3 = useRevealRange(smoothProgress, 0.50, 0.58, 22, 0.988);
    const timeline4 = useRevealRange(smoothProgress, 0.55, 0.63, 22, 0.988);
    const timeline5 = useRevealRange(smoothProgress, 0.60, 0.68, 22, 0.988);
    const timeline6 = useRevealRange(smoothProgress, 0.65, 0.73, 22, 0.988);
    const timeline7 = useRevealRange(smoothProgress, 0.70, 0.78, 22, 0.988);

    const marker1 = useTimelineMarkerRange(smoothProgress, 0.42, 0.47);
    const marker2 = useTimelineMarkerRange(smoothProgress, 0.47, 0.52);
    const marker3 = useTimelineMarkerRange(smoothProgress, 0.52, 0.57);
    const marker4 = useTimelineMarkerRange(smoothProgress, 0.57, 0.62);
    const marker5 = useTimelineMarkerRange(smoothProgress, 0.62, 0.67);
    const marker6 = useTimelineMarkerRange(smoothProgress, 0.67, 0.72);
    const marker7 = useTimelineMarkerRange(smoothProgress, 0.72, 0.77);

    const timelineStyles = [
        timeline1,
        timeline2,
        timeline3,
        timeline4,
        timeline5,
        timeline6,
        timeline7,
    ];

    const markerStyles = [
        marker1,
        marker2,
        marker3,
        marker4,
        marker5,
        marker6,
        marker7,
    ];

    return (
        <section id="sobre" ref={sectionRef} className="section-about-me">
            <div className="container">
                <div className="pr-0 lg:pr-12">
                    <motion.div
                        className="title-section-container"
                        style={{
                            opacity: legend.opacity,
                            y: legend.y,
                            scale: legend.scale,
                        }}
                    >
                        <p className="section-top-legend">Sobre mim</p>

                        <motion.h2
                            className="section-title text-dev-white"
                            style={{
                                opacity: title.opacity,
                                y: title.y,
                                scale: title.scale,
                            }}
                        >
                            Resumo profissional
                        </motion.h2>
                    </motion.div>

                    <div className="summary-experience-container">
                        <div className="summary-about-me">
                            <motion.p
                                style={{
                                    opacity: paragraph1.opacity,
                                    y: paragraph1.y,
                                    scale: paragraph1.scale,
                                }}
                            >
                                Sou <strong>Desenvolvedor Fullstack</strong> com foco em backend{" "}
                                <strong>PHP/Laravel</strong>, com experiência em criação de APIs, 
                                sistemas de gerenciamento e integração de soluções orientadas a dados.
                            </motion.p>

                            <motion.p
                                style={{
                                    opacity: paragraph2.opacity,
                                    y: paragraph2.y,
                                    scale: paragraph2.scale,
                                }}
                            >
                                Atuação profissional em ambiente corporativo com manutenção de CRMs, 
                                análise SQL e integração de sistemas. Familiarizado com boas práticas 
                                de qualidade de código <strong>(Clean Code, SOLID)</strong>, versionamento com Git e ambiente Docker.
                            </motion.p>

                            <motion.p
                                style={{
                                    opacity: paragraph3.opacity,
                                    y: paragraph3.y,
                                    scale: paragraph3.scale,
                                }}
                            >
                               Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> pela SENAC (2025), 
                               atualmente trabalhando no <strong>GrupoMM.</strong>
                            </motion.p>
                        </div>
                    </div>

                    <motion.div
                        style={{
                            opacity: skills.opacity,
                            y: skills.y,
                            scale: skills.scale,
                        }}
                    >
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
                                            <motion.li
                                                key={item.date}
                                                className={`timeline-item ${index === timeline.length - 1 ? "pb-0!" : ""
                                                    }`}
                                                style={{
                                                    opacity: timelineStyles[index].opacity,
                                                    y: timelineStyles[index].y,
                                                    scale: timelineStyles[index].scale,
                                                }}
                                            >
                                                <div className="timeline-info">
                                                    <span>{item.date}</span>
                                                </div>

                                                <motion.div
                                                    className="timeline-marker"
                                                    style={{
                                                        opacity: markerStyles[index].opacity,
                                                        scale: markerStyles[index].scale,
                                                    }}
                                                />

                                                <div className="timeline-content">
                                                    <p>{item.text}</p>
                                                </div>
                                            </motion.li>
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