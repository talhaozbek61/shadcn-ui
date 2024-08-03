"use client";
import { motion } from "framer-motion";
import ContactForm from "./_components/contact-form";

const contactInfo = [
  {
    name: "Email",
    value: "learning-shadcn-ui@vercel.app",
  },
  {
    name: "Phone",
    value: "+90 123 456 789",
  },
  {
    name: "Business Hours",
    value: "Monday - Saturday: 08:00 - 18:00",
  },
];

// Motion Setting
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Page() {
  return (
    <motion.div
      className="px-6 py-24 sm:py-32 lg:px-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Is the answer to your question missing? Get in touch with us.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 mt-8">
        <div className="space-y-8">
          {contactInfo.map((info, iIdx) => (
            <motion.div variants={item} key={iIdx}>
              <h3 className="text-sm text-gray-700">{info.name}</h3>
              <p className="text-sm text-gray-900">{info.value}</p>
            </motion.div>
          ))}
          <motion.iframe
            variants={item}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385406.4377761348!2d28.388428317242397!3d41.00364033257478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1722669666917!5m2!1sen!2str"
            className="w-full h-[300px] rounded-md"
            referrerPolicy="no-referrer-when-downgrade"
          ></motion.iframe>
        </div>
        <ContactForm />
      </div>
    </motion.div>
  );
}
