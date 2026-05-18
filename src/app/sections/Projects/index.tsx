"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { projects } from "../Projects/data";

export function Projects() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <section id="projetos" className="section-projects">
      <div className="container mx-auto">
        <span className="section-top-legend">PROJETOS</span>
        <div className="flex items-end justify-between">
          <h2 className="section-title text-2xl lg:text-4xl font-bold">
            O que eu andei construindo
          </h2>

          <div className="projects-top-pagination">
            <button
              onClick={handlePrev}
              className="button-projects-swiper"
              aria-label="Previous project"
            ><Image
              src="/icons/chevron_left_icon_white.svg"
              alt="Project placeholder"
              width={40}
              height={40}
            /></button>


            <button
              onClick={handleNext}
              className="button-projects-swiper"
              aria-label="Next project"
            ><Image
              src="/icons/chevron_right_icon_white.svg"
              alt="Project placeholder"
              width={40}
              height={40}
            /></button>
          </div>
        </div>

        <div className="projects-content">
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
                      aria-label="Technologies used"
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
                      Ver Projeto
                    </Button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="projects-dots" />
        </div>
      </div>
    </section>
  );
}
