import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer className="w-screen max-h-screen primary py-8 px-4 flex flex-col items-center">
      <motion.div
        className="w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        viewport={{ once: true }}
      >
        {/* Contact Header */}
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Telephone */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            <FaPhoneAlt size={24} />
            <span className="text-lg">+66-87-241-3949</span>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <FaEnvelope size={24} />
            <span className="text-lg">beforever369@gmail.com</span>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
