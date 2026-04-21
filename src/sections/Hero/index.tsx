export default function Home() {
  return (
    <section id="" className="">
      <div className="">
        <picture className="">
          {/* <source media="(max-width: 639px)" srcSet="/images/port_banner_mobile.png" />

          <source media="(max-width: 1023px)" srcSet="/images/port_banner_tablet.png" /> */}

          <img
            src="/images/port_banner_web.png"
            alt="Banner principal"
            className="w-full"
          />
        </picture>
      </div>
    </section>
  );
}