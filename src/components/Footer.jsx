export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-white text-sm tracking-wide">
            © {new Date().getFullYear()} Roman Řehák
          </p>
          <p className="text-zinc-500 text-xs mt-1">
            Phone Art & Digital Fine Art
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6 text-zinc-400 text-xs">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#media" className="hover:text-white transition-colors">Media</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right */}
        <div className="text-zinc-500 text-[11px] tracking-widest uppercase text-center md:text-right">
          Digital Art Archive
        </div>

      </div>
    </footer>
  );
}