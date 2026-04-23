"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const testimonials = [
  {
    message:
      "Proativo, atencioso e colaborativo. Sempre disposto a ajudar, explica com clareza termos técnicos e fluxos de negócio. Não deixa para a última hora.",
    name: "Luis Chibilski",
    position: "Analista QA",
  },
  {
    message:
      "Conhecimentos que vão além do desenvolvimento, design, prototipação e comunicação técnica. Um pilar entre o produto, o cliente e o desenvolvimento.",
    name: "Matheus Padilha",
    position: "Mid Level Software Engineer",
  },
  {
    message:
      "Uma peça fundamental para o sucesso do projeto.",
    name: "Rafael Koteski",
    position: "Gerente de Projetos",
  },
  {
    message:
      "Dedicação e esforço evidentes, com resultados excelentes. Atitude positiva e colaborativa que toda a equipe aprecia — proatividade que se destaca e fortalece o time.",
    name: "Nahyeri Kott",
    position: "Supervisora de Crédito e Cobrança",
  },
  {
    message:
      "Dedicado e sempre em busca de conhecimento, em evolução constante. Sempre pronto para ajudar, se destacando pela autonomia e comprometimento.",
    name: "Amanda Gonsalves",
    position: "Desenvolvedora Full Stack",
  },
];

function useRevealRange(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 14,
) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [fromY, 0]);

  return { opacity, y };
}

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 76%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const legend = useRevealRange(smoothProgress, 0.0, 0.1, 10);
  const title = useRevealRange(smoothProgress, 0.04, 0.16, 12);
  const carousel = useRevealRange(smoothProgress, 0.1, 0.24, 16);

  return (
    <section ref={sectionRef} className="section-testimonials">
      <div className="container">
        <motion.p
          className="section-top-legend"
          style={{
            opacity: legend.opacity,
            y: legend.y,
          }}
        >
          Depoimentos
        </motion.p>

        <motion.h2
          className="section-title"
          style={{
            opacity: title.opacity,
            y: title.y,
          }}
        >
          O que dizem sobre mim
        </motion.h2>

        <motion.div
          className="testimonials-cards relative"
          style={{
            opacity: carousel.opacity,
            y: carousel.y,
          }}
        >
          <button
            ref={prevRef}
            className="testimonial-prev absolute left-0 top-1/2 z-10 -translate-y-1/2"
            aria-label="Voltar"
          >
            <Image
              src="/icons/chevron_left_icon_white.svg"
              alt="Voltar"
              width={0}
              height={0}
              className="h-5 w-auto"
            />
          </button>

          <button
            ref={nextRef}
            className="testimonial-next absolute right-0 top-1/2 z-10 -translate-y-1/2"
            aria-label="Avançar"
          >
            <Image
              src="/icons/chevron_right_icon_white.svg"
              alt="Avançar"
              width={0}
              height={0}
              className="h-5 w-auto"
            />
          </button>

          <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={24}
            slidesPerView={1}
            speed={650}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              sensitivity: 1,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="testimonial-card h-full">
                  <Image
                    src="/icons/quote_icon_orange.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="h-5 w-auto"
                  />

                  <p className="testimonial-message">"{item.message}"</p>

                  <div className="testimonial-author">
                    <p className="author-name">{item.name}</p>
                    <p className="author-position">{item.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}