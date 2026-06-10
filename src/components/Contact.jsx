import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaTumblr 
} from 'react-icons/fa';

function XIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
    >
      <path d="M18.244 2H21.5l-7.5 8.56L22 22h-6.8l-5.3-6.92L3.8 22H.5l7.9-9.06L2 2h6.9l4.8 6.32L18.244 2zm-1.2 18h1.8L6.2 4H4.3l12.744 16z"/>
    </svg>
  );
}

export default function Contact() {
  const { t, i18n } = useTranslation();

  const subject =
    i18n.language === 'cs'
      ? "Zpráva z webových stránek romanrehak.com"
      : "Message from romanrehak.com website";

  const email = "phoneartrr@gmail.com";

  const socialLinks = [
    { icon: <FaInstagram className="w-7 h-7" />, url: "https://www.instagram.com/romanrehak63/", name: "Instagram" },
    { icon: <FaLinkedin className="w-7 h-7" />, url: "https://www.linkedin.com/in/roman-%C5%99eh%C3%A1k-4b5919245", name: "LinkedIn" },
    { icon: <XIcon className="w-7 h-7" />, url: "https://twitter.com/romanrehak", name: "X" },
    { icon: <FaFacebook className="w-7 h-7" />, url: "https://www.facebook.com/romanrehak63", name: "Facebook" },
    { icon: <FaYoutube className="w-7 h-7" />, url: "https://www.youtube.com/channel/UCvz5RwLSMkIkHhk1y2sxIyw/featured", name: "YouTube" },
    { icon: <FaTumblr className="w-7 h-7" />, url: "https://www.tumblr.com/romanrehak", name: "Tumblr" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 bg-zinc-950 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">
            {t('contact.title') || "Kontakt"}
          </h2>
          <p className="text-zinc-400 text-lg max-w-md mx-auto">
            {t('contact.subtitle') || "Máte zájem o spolupráci, tisk nebo zakázku? Napište mi."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-14">

          {/* EMAIL CARD */}
          <motion.a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
            className="group flex items-center gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 px-10 py-6 rounded-3xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <Mail className="w-8 h-8 text-[#c0c6d0]" />

            <div className="text-left">
              <p className="text-white text-xl font-medium">
                {t('contact.writeMessage') || "Napsat zprávu"}
              </p>
              
            </div>
          </motion.a>

          {/* SOCIALS */}
          <div className="w-full max-w-md">
            <p className="text-center text-zinc-400 mb-8">
              {t('contact.follow') || "Sledujte mě na sociálních sítích"}
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-white/10 group-hover:border-[#c0c6d0] rounded-2xl transition-all bg-white/5 group-hover:bg-white/10">
                    {social.icon}
                  </div>

                  <span className="text-[11px] tracking-[0.2em]">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}