import { Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useColorMode } from '../context/ColorModeContext';

const SocialLinks = () => {
  const { getAccentColor } = useColorMode();
  
  const socialLinks = [
    {
      icon: <Mail size={24} />,
      href: 'mailto:salamanca1122top@gmail.com.com',
      color: 'hover:bg-red-500'
    },
    {
      icon: <Github size={24} />,
      href: 'https://github.com/copito10',
      color: 'hover:bg-gray-800'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/edwin-johan-salamanca-s%C3%A1nchez-3b92aa202/',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Instagram size={24} />,
      href: 'https://www.instagram.com/salamanca5319?igsh=cGVidnNjYTRrZHho',
      color: 'hover:bg-pink-600'
    },
    {
      icon: <MessageCircle size={24} />,
      href: 'https://wa.me/573123650184',
      color: 'hover:bg-green-500'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${link.color} hover:text-white`}
          style={{ borderColor: getAccentColor() }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;