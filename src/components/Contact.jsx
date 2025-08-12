import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      type: "Email",
      value: "gmnayem631@gmail.com",
      icon: <MdEmail size={28} />,
      link: "mailto:gmnayem631@gmail.com",
    },
    {
      type: "Phone",
      value: "+8801521759634",
      icon: <MdPhone size={28} />,
      link: "tel:+8801521759634",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto text-center py-20 px-6 bg-base-100 rounded-xl shadow-lg"
      aria-label="Contact Information"
    >
      <h2 className="text-4xl font-bold text-primary mb-12">Contact Me</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-12">
        {contacts.map(({ type, value, icon, link }) => (
          <motion.a
            key={type}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#F5DDDD] rounded-full px-6 py-4 text-primary font-semibold shadow-md hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Contact via ${type}`}
          >
            <motion.div
              className="text-primary"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>
            <span>{value}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
