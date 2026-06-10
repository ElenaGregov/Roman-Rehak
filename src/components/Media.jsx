import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Media() {
  const { t } = useTranslation();

  const mediaItems = t('media.items', { returnObjects: true });

  return (
    <section
      id="media"
      className="min-h-screen flex flex-col justify-center py-16 lg:py-20 px-6 bg-zinc-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#e5e7eb15_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-white">
            {t('media.title')}
          </h2>

          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            {t('media.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-12 4xl:gap-16 mb-28">
          {mediaItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#c0c6d0]/40 transition-all duration-500 flex flex-col h-full shadow-2xl hover:shadow-[0_25px_50px_-12px_rgb(192,198,208,0.25)]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-44 lg:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 text-xs tracking-widest bg-white/10 text-[#c0c6d0] border border-white/20 rounded-full">
                    {item.source}
                  </span>
                  <span className="text-sm text-zinc-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg lg:text-xl leading-tight font-medium text-balance mb-4 group-hover:text-[#c0c6d0] transition-colors duration-300 line-clamp-3 flex-1">
                  {item.title}
                </h3>

                <div className="inline-flex items-center gap-2 text-sm text-[#c0c6d0] transition-all duration-300 mt-auto">
                  {t('media.readArticle')}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              <div className="h-px w-0 bg-gradient-to-r from-transparent via-[#c0c6d0] to-transparent group-hover:w-full transition-all duration-700 absolute bottom-0 left-0" />
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.a
            href="https://romanrehak.net/media"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3 border border-[#c0c6d0]/30 hover:border-[#c0c6d0] rounded-full text-[#c0c6d0] hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {t('media.allArticles')}
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}