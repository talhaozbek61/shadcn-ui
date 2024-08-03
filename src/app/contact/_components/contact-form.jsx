"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Notification from "./notification";

// Motion Setting
const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ContactForm() {
  // Schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Enter your full name.")
      .required("Name is required."),
    email: Yup.string()
      .email("Invalid e-mail address.")
      .required("E-mail address is required."),
    phone: Yup.number()
      .typeError("Invalid phone number.")
      .required("Telephone number is required."),
    message: Yup.string().required("Message is required."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const onSubmit = async (data) => {
    try {
      setData(data);
      // console.log(data);
      setStatus(true);
      setShow(true);
      reset();
      setTimeout(() => {
        setShow(false);
      }, 5000);
    } catch (err) {
      console.log(err);
      setStatus(false);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  };
  return (
    <>
      <Notification show={show} setShow={setShow} data={data} status={status} />
      <form className="space-y-16" onSubmit={handleSubmit(onSubmit)}>
        <motion.div variants={item}>
          <div className="relative">
            <Input
              type="text"
              id="name"
              className="!rounded-t-md !rounded-b-none block w-full border-0 bg-zinc-50/50 py-1.5 text-gray-900 focus-visible:ring-0 sm:text-sm sm:leading-6"
              placeholder="Name"
              {...register("name", {
                required: true,
              })}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-t border-zinc-300"
            />
          </div>
          {errors.name && (
            <p
              className={`block text-sm font-medium mt-1 px-3 ${
                errors.name ? "text-red-400" : "text-gray-700"
              } `}
            >
              {errors.name?.message}
            </p>
          )}
        </motion.div>
        <motion.div variants={item}>
          <div className="relative">
            <Input
              type="email"
              id="email"
              className="!rounded-t-md !rounded-b-none block w-full border-0 bg-zinc-50/50 py-1.5 text-gray-900 focus-visible:ring-0 sm:text-sm sm:leading-6"
              placeholder="Email"
              {...register("email", {
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                required: true,
              })}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-t border-zinc-300"
            />
          </div>
          {errors.email && (
            <p
              className={`block text-sm font-medium mt-1 px-3 ${
                errors.email ? "text-red-400" : "text-gray-700"
              } `}
            >
              {errors.email?.message}
            </p>
          )}
        </motion.div>
        <motion.div variants={item}>
          <div className="relative">
            <Input
              type="text"
              id="phone"
              className="!rounded-t-md !rounded-b-none block w-full border-0 bg-zinc-50/50 py-1.5 text-gray-900 focus-visible:ring-0 sm:text-sm sm:leading-6"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-t border-zinc-300"
            />
          </div>
          {errors.phone && (
            <p
              className={`block text-sm font-medium mt-1 px-3 ${
                errors.phone ? "text-red-400" : "text-gray-700"
              } `}
            >
              {errors.phone?.message}
            </p>
          )}
        </motion.div>
        <motion.div variants={item}>
          <div className="relative">
            <Textarea
              id="message"
              placeholder="Message"
              className="!rounded-t-md !rounded-b-none block w-full border-0 bg-zinc-50/50 py-1.5 text-gray-900 focus-visible:ring-0 sm:text-sm sm:leading-6"
              {...register("message", {
                required: true,
              })}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-t border-zinc-300"
            />
          </div>
          {errors.message && (
            <p
              className={`block text-sm font-medium mt-1 px-3 ${
                errors.message ? "text-red-400" : "text-gray-700"
              } `}
            >
              {errors.message?.message}
            </p>
          )}
        </motion.div>
        <Button className="w-full rounded-full" disabled={!isValid}>
          Send
        </Button>
        <p className="text-sm !mt-2.5 text-gray-700 px-3">
          By submitting this form, you agree to the privacy policy.
        </p>
      </form>
    </>
  );
}
