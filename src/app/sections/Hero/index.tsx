export default function Home() {
  return (
    <section id="inicio" className="section-home-hero">
      <div className="home-hero-banner container">
        <picture>
          {/* <source media="(max-width: 639px)" srcSet="/images/banner_mobile.png" />

          <source media="(max-width: 1023px)" srcSet="/images/banner_tablet.png" /> */}

          <img
            src="/images/port_banner_web.png"
            alt="Banner principal"
          />
        </picture>
      </div>
    </section>
  );
}