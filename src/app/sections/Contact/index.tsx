"use client";

import Button from "@/src/components/Button";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

function useReveal(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 16,
) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [fromY, 0]);

  return { opacity, y };
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 70%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const header = useReveal(smooth, 0.0, 0.15, 12);
  const paragraph = useReveal(smooth, 0.08, 0.22, 14);
  const buttons = useReveal(smooth, 0.16, 0.3, 14);
  const image = useReveal(smooth, 0.18, 0.34, 18);

  const media1 = useReveal(smooth, 0.28, 0.42, 14);
  const media2 = useReveal(smooth, 0.34, 0.48, 14);
  const media3 = useReveal(smooth, 0.4, 0.54, 14);
  const media4 = useReveal(smooth, 0.46, 0.6, 14);

  return (
    <section ref={sectionRef} id="contato" className="section-contact">
      <div className="contact-container container">
        <div className="grid grid-cols-[auto_1fr]">
          <div>
            <motion.p
              className="section-top-legend"
              style={{
                opacity: header.opacity,
                y: header.y,
              }}
            >
              Contato
            </motion.p>

            <motion.h2
              className="section-title"
              style={{
                opacity: header.opacity,
                y: header.y,
              }}
            >
              Fale comigo
            </motion.h2>

            <motion.p
              className="text-dev-gray mt-6 max-w-110"
              style={{
                opacity: paragraph.opacity,
                y: paragraph.y,
              }}
            >
              Disponível para vagas, contratos e projetos freelance. Conte sobre
              sua ideia ou oportunidade.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-8 mb-2"
              style={{
                opacity: buttons.opacity,
                y: buttons.y,
              }}
            >
              <Button href="#servicos" variant="primary">
                Ver serviços
              </Button>

              <Button
                href="/documents/CV_Eduardo_Henrique.pdf"
                variant="secondary"
                download
              >
                Baixar CV

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-3 size-4 transition-colors"
                >
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </Button>
            </motion.div>
          </div>

          <motion.div
            style={{
              opacity: image.opacity,
            }}
          >
            <Image
              src="/icons/.svg"
              alt="Satoru Gojo acenando"
              width={0}
              height={0}
              className="cat-contact-me"
            />
          </motion.div>
        </div>

        <div className="medias-container">
          <motion.a
            href="mailto:05eduardomachado@gmail.com"
            target="_blank"
            className="email-contact"
            style={{
              opacity: media1.opacity,
              y: media1.y,
            }}
          >
            <Image
              src="/icons/arrow_link_icon_black.svg"
              alt="Redirecionar"
              width={0}
              height={0}
              className="button-redirect"
            />

            <div>
              <div className="media-contact">
                <Image
                  src="/icons/mail_icon_orange.svg"
                  alt="E-mail"
                  width={0}
                  height={0}
                  className="h-6 w-auto mb-4"
                />
                <p>E-mail</p>
              </div>

              <p className="contact-info">05eduardomachado@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/eduardohcm/"
            target="_blank"
            className="linkedin-contact"
            style={{
              opacity: media2.opacity,
              y: media2.y,
            }}
          >
            <Image
              src="/icons/arrow_link_icon_black.svg"
              alt="Redirecionar"
              width={0}
              height={0}
              className="button-redirect"
            />

            <div>
              <div className="media-contact">
                <Image
                  src="/icons/linkedin_icon_orange.svg"
                  alt="LinkedIn"
                  width={0}
                  height={0}
                  className="h-6 w-auto mb-4"
                />
                <p>LinkedIn</p>
              </div>

              <p className="contact-info">
                linkedin.com/in/eduardohcm/
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.github.com/MachadoEduardo"
            target="_blank"
            className="github-contact"
            style={{
              opacity: media3.opacity,
              y: media3.y,
            }}
          >
            <Image
              src="/icons/arrow_link_icon_black.svg"
              alt="Redirecionar"
              width={0}
              height={0}
              className="button-redirect"
            />

            <div>
              <div className="media-contact">
                <Image
                  src="/icons/github_icon_orange.svg"
                  alt="Github"
                  width={0}
                  height={0}
                  className="h-6 w-auto mb-4"
                />
                <p>GitHub</p>
              </div>

              <p className="contact-info">github.com/MachadoEduardo</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}