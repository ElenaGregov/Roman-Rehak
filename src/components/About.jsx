import { useTranslation } from 'react-i18next';
import bg1 from "../assets/images/rh_portret.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-5xl font-serif text-center mb-16">{t('about.title')}</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
          <p>{t('about.text1')}</p>
          <p>{t('about.text2')}</p>
          <p>{t('technique.text')}</p>
        </div>
         
       
        <div className="aspect-square bg-zinc-800 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={bg1}
            alt="Roman Řehák" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}