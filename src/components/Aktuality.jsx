import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Aktuality() {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState(null);

  // Používáme absolutní cesty z /public složky
  const announcements = t('announcements', { returnObjects: true }).map(post => ({
    ...post,
    image: post.image // cesty budou začínat lomítkem (/img/...)
  }));

  return (
    <section id="aktuality" className="min-h-screen py-20 px-6 bg-zinc-950 flex items-center relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif mb-4 text-white">
            {t('aktuality.title')}
          </h2>
          <p className="text-zinc-400 text-lg">
            {t('aktuality.subtitle')}
          </p>
        </div>

        <div className="space-y-10">
          {announcements.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="group grid md:grid-cols-12 bg-zinc-900 border border-white/10 hover:border-[#c0c6d0]/40 rounded-3xl overflow-hidden cursor-pointer transition-all hover:shadow-2xl"
            >
              {/* Obrázek vlevo */}
              <div className="md:col-span-5 relative h-[380px] md:h-auto overflow-hidden">
                <img
                  src={post.image}           // ← důležité: musí začínat lomítkem
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black/70 backdrop-blur-md text-white text-sm px-5 py-2 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text vpravo */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-sm text-zinc-400 mb-4">
                  {post.date}
                </div>

                <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-5 group-hover:text-[#c0c6d0] transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-[17px] mb-8">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-[#c0c6d0] font-medium group-hover:gap-3 transition-all">
                  {t('aktuality.readMore')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tlačítko na všechny aktuality */}
        <div className="flex justify-center mt-16">
          <motion.a
            href="https://romanrehak.net/aktuality"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-4 px-10 py-5 border border-[#c0c6d0]/40 hover:border-[#c0c6d0] rounded-full text-[#c0c6d0] hover:bg-white/5 transition-all text-lg font-medium"
          >
            {t('aktuality.allNews')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
         <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPost(null)}   // ← Zavře při kliknutí na pozadí
          >
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 max-w-4xl w-full rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}   // ← Zabrání zavření při kliknutí uvnitř
            >
              <div className="relative">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full max-h-[65vh] object-contain bg-zinc-950"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 bg-black/70 hover:bg-black text-white p-4 rounded-full text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="p-10 md:p-14">
                <div className="text-sm text-zinc-400 mb-4">
                  {selectedPost.date} • {selectedPost.category}
                </div>
                <h2 className="text-3xl font-medium mb-6">{selectedPost.title}</h2>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {selectedPost.excerpt}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}