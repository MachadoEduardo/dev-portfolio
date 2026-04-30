import Image from "next/image";
import { menu } from "../Navigation/utils/menu";
import Link from "next/link";

export default function Footer() {
  return (
    <section
      className="dev-footer"
    >
      <div className="footer-content container">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <p> Edu, The Dev </p>
            <div className="dot"></div>
          </div>

          <p className="footer-position"> Desenvolvedor Fullstack </p>
        </div>

        <ul className="footer-menu">
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="footer-actions">
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/eduardohcm/" target="_blank">
              <Image
                src="/icons/linkedin_icon_white.svg"
                alt="LinkedIn"
                width={0}
                height={0}
                className="h-5 w-auto cursor-pointer"
              />
            </a>

            <a href="https://github.com/MachadoEduardo" target="_blank">
              <Image
                src="/icons/github_icon_white.svg"
                alt="Github"
                width={0}
                height={0}
                className="h-5 w-auto cursor-pointer"
              />
            </a>
          </div>

          <p className="footer-copyright"> © 2026 Edu, The Dev. Todos os direitos reservados. </p>
        </div>
      </div>
    </section>
  );
}