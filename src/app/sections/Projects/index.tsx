"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { projects } from "../Projects/data";

function useReveal(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 40,
) {
  const shouldReduceMotion = useReducedMotion();

  const opacity = useTransform(progress, [start, end], [0, 1]);

  const y = useTransform(
    progress,
    [start, end],
    shouldReduceMotion ? [0, 0] : [fromY, 0],
  );

  return {
    opacity,
    y,
  };
}

export function Projects() {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const legend = useReveal(smoothProgress, 0, 0.12, 18);

  const title = useReveal(smoothProgress, 0.05, 0.18, 24);

  const slider = useReveal(smoothProgress, 0.12, 0.3, 40);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <section id="projetos" className="section-projects" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.span className="section-top-legend" style={legend}>
          PROJETOS
        </motion.span>

        <motion.div className="flex items-end justify-between" style={title}>
          <h2 className="section-title text-2xl lg:text-4xl font-bold">
            O que eu andei construindo
          </h2>

          <div className="projects-top-pagination">
            <button
              onClick={handlePrev}
              className="button-projects-swiper"
              aria-label="Projeto anterior"
            >
              <Image
                src="/icons/chevron_left_icon_white.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>

            <button
              onClick={handleNext}
              className="button-projects-swiper"
              aria-label="Próximo projeto"
            >
              <Image
                src="/icons/chevron_right_icon_white.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div>
        </motion.div>

        <motion.div className="projects-content" style={slider}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, A11y]}
            slidesPerView={1}
            loop={projects.length > 1}
            pagination={{
              el: ".projects-dots",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              clickable: true,
            }}
            a11y={{ enabled: true }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <article className="project-slide">
                  <div className="projet-mockup">
                    <Image
                      src={project.mockupSrc}
                      alt={project.mockupAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={project.id === projects[0].id}
                    />
                  </div>

                  <div className="about-project">
                    <ul
                      className="project-techs"
                      aria-label="Tecnologias utilizadas"
                    >
                      {project.techs.map((tech) => (
                        <li key={tech}>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <Button href={project.href} variant="secondary">
                      Ver código
                    </Button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="projects-dots" />
        </motion.div>
      </div>
    </section>
  );
}
