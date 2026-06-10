import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'cs' ? 'en' : 'cs');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-white/10 py-2' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-8x1 mx-auto px-2 flex justify-between items-center">
        
      {/* SVG Logo */}
<a href="#hero" className="flex items-center">
  <img 
    src="/logo.svg" 
    alt="Roman Řehák" 
    className={`h-16 md:h-20 transition-all duration-300 filter brightness-0 invert ${
      isScrolled 
        ? 'brightness-0 invert' 
        : 'brightness-0 invert drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]'
    }`}
  />
</a>
        
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="hover:text-gold transition-colors">{t('nav.about')}</a>
          <a href="#aktuality" className="hover:text-gold transition-colors">{t('nav.aktuality')}</a>
          <a href="#gallery" className="hover:text-gold transition-colors">{t('nav.gallery')}</a>
          <a href="#media" className="hover:text-gold transition-colors">{t('nav.media')}</a>
          <a href="#exhibitions" className="hover:text-gold transition-colors">{t('nav.exhibitions')}</a>
          <a href="#contact" className="hover:text-gold transition-colors">{t('nav.contact')}</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className={`px-4 py-2 text-sm border rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'border-white/30 hover:bg-white/10' 
                : 'border-white/40 hover:bg-white/10'
            }`}
          >
            {i18n.language === 'cs' ? 'EN' : 'CZ'}
          </button>
          
          <button 
            className="md:hidden text-3xl" 
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 mt-4">
          <div className="flex flex-col py-6 px-6 space-y-6 text-lg">
            <a href="#about" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
              {t('nav.about')}
            </a>
            <a href="#aktuality" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
              {t('nav.aktuality')}
            </a>
            <a href="#gallery" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
              {t('nav.gallery')}
            </a>
            <a href="#media" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
              {t('nav.media')}
            </a>
            <a href="#exhibitions" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
              {t('nav.exhibitions')}
            </a>
            <a href="#contact" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>
              {t('nav.contact')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}