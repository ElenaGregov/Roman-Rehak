import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const artworks = [
  {
    id: 1,
    url: "./img/gallery/1.png",
    thumb: "./img/gallery/1.png",
    title: "",
    year: "2025"
  },
  {
    id: 2,
    url: "./img/gallery/2.png",
    thumb: "./img/gallery/2.png",
    title: "",
    year: "2025"
  },
  {
    id: 3,
    url: "./img/gallery/3.png",
    thumb: "./img/gallery/3.png",
    title: "",
    year: "2025"
  },
  {
    id: 4,
    url: "./img/gallery/4.png",
    thumb: "./img/gallery/4.png",
    title: "",
    year: "2025"
  },
  {
    id: 5,
    url: "./img/gallery/5.png",
    thumb: "./img/gallery/5.png",
    title: "",
    year: "2025"
  },
  {
    id: 6,
    url: "./img/gallery/6.png",
    thumb: "./img/gallery/6.png",
    title: "",
    year: "2025"
  },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(artworks[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % artworks.length;
    setCurrentIndex(next);
    setSelectedImage(artworks[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + artworks.length) % artworks.length;
    setCurrentIndex(prev);
    setSelectedImage(artworks[prev]);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-zinc-950">
      <h2 className="text-5xl font-serif text-center mb-16">{t('gallery.title')}</h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {artworks.map((art, index) => (
          <motion.div
            key={art.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(index)}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={art.thumb}
              alt={art.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div>
                <p className="text-gold text-sm">{art.title}</p>
                <p className="text-zinc-400 text-xs">{art.year}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ==================== LIGHTBOX ==================== */}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={closeLightbox}
    >
      <div
        className="relative max-w-6xl w-full px-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          onClick={closeLightbox}
          className="absolute -top-14 right-0 w-10 h-10 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-all z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ×
        </motion.button>

        {/* Previous Arrow */}
<motion.button
  onClick={(e) => {
    e.stopPropagation();
    prevImage();
  }}
  className="absolute left-0 top-1/2 w-12 h-12 rounded-full border border-[#c0c6d0]/30 bg-black/30 backdrop-blur-md flex items-center justify-center text-[#c0c6d0] hover:border-[#c0c6d0] hover:bg-black/50 transition-all z-50"
  style={{ y: "-50%" }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  </svg>
</motion.button>

{/* Next Arrow */}
<motion.button
  onClick={(e) => {
    e.stopPropagation();
    nextImage();
  }}
  className="absolute right-0 top-1/2 w-12 h-12 rounded-full border border-[#c0c6d0]/30 bg-black/30 backdrop-blur-md flex items-center justify-center text-[#c0c6d0] hover:border-[#c0c6d0] hover:bg-black/50 transition-all z-50"
  style={{ y: "-50%" }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
</motion.button>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          key={selectedImage.id}
        >
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            loading="lazy"
            className="w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {selectedImage.title && (
            <p className="text-2xl text-[#c0c6d0]">
              {selectedImage.title}
            </p>
          )}

          <p className="text-zinc-400">
            Roman Řehák • {selectedImage.year}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}