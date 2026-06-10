/*import { useTranslation } from 'react-i18next';*/
import { motion } from 'framer-motion';

const exhibitions = [
  {
    year: "2025",
    title: "Noční zpovědi",
    subtitle: "Sólová výstava",
    location: "Galerie La Femme, Praha",
    date: "Červen — Srpen 2025",
    highlight: "Premiéra",
  },
  {
    year: "2024",
    title: "Phone Art 2024",
    subtitle: "Kolektivní výstava",
    location: "Česká Třebová",
    date: "Květen — Červen 2024",
    highlight: "Úspěch",
  },
  {
    year: "2024",
    title: "Art Prague",
    subtitle: "Mezinárodní veletrh",
    location: "Výstaviště Praha Holešovice",
    date: "Listopad 2024",
    highlight: "",
  },
  {
    year: "2023",
    title: "Vernisáž s Felixem Slováčkem",
    subtitle: "Sólová výstava",
    location: "Praha",
    date: "19. července 2023",
    highlight: "Speciální",
  },
];

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-28 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif mb-4">Výstavy</h2>
          <p className="text-zinc-400">Vybrané výstavy a umělecké projekty</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {exhibitions.map((ex, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-800 border border-white/10 p-9 rounded-3xl hover:border-[#c0c6d0]/40 transition-all hover:-translate-y-1"
            >
              <div className="text-[#c0c6d0] mb-2 font-medium">{ex.year}</div>
              <h3 className="text-2xl font-medium mb-1">{ex.title}</h3>
              <p className="text-zinc-400 mb-6">{ex.subtitle}</p>
              
              <div className="space-y-2 text-sm">
                <p><span className="text-zinc-500">Místo:</span> {ex.location}</p>
                <p><span className="text-zinc-500">Termín:</span> {ex.date}</p>
              </div>

              {ex.highlight && (
                <div className="mt-6 inline-block px-5 py-2 text-xs border border-[#c0c6d0]/30 text-[#c0c6d0] rounded-full">
                  {ex.highlight}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}