import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
     <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/img/bg.jpg')" }}
>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[60vh]">
       {/* <h2 className="text-stone-300 text-xl tracking-[4px] mb-4">PHONE ART</h2>*/}
        <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl text-stone-300 mb-10">
          {t('hero.subtitle')}
        </p>
        <a
          href="#gallery"
          className="inline-block px-10 py-4 border border-zinc-400 text-zinc hover:bg-gradient-to-r from-stone-400 via-stone-300 to-stone-400 hover:text-black transition-all duration-300 text-lg tracking-wider"
        >
          {t('hero.button')}
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#gallery" className="text-zinc-300">↓</a>
      </div>
    </section>
  );
}
