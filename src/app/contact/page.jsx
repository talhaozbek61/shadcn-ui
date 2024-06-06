"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Response = ({ data }) => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-center">
          Hello {data?.name}
        </h1>
        <p className="text-base font-medium">
          We have your contact details and will get back to you soon...
        </p>
        <h2 className="text-2xl font-semibold mt-8">Your Info:</h2>
        <p className="text-sm font-semibold">Your Name: {data?.name}</p>
        <p className="text-sm font-semibold">Your Email: {data?.email}</p>
        <p className="text-sm font-semibold">Your Phone: {data?.phone}</p>
        <p className="text-sm font-semibold">Your Message: {data?.message}</p>
      </div>
    </>
  );
};

export default function Page() {
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
  const onSubmit = async (data) => {
    setData(await data);
    reset();
  };
  return (
    <div className="mx-auto max-w-2xl py-8 lg:py-12">
      {data ? (
        <Response data={data} />
      ) : (
        <>
          <h1 className="text-3xl font-semibold text-center">Contact</h1>
          <form
            className="py-4 space-y-2 mx-auto max-w-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Label
                htmlFor="name"
                className={`block text-sm font-medium ${
                  errors.name ? "text-red-400" : "text-gray-700"
                } `}
              >
                {errors.name ? errors.name?.message : "Name"}
              </Label>
              <Input
                type="text"
                id="name"
                className="rounded-sm focus-visible:ring-0 mt-1"
                placeholder="Name"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  errors.email ? "text-red-400" : "text-gray-700"
                } `}
              >
                {errors.email ? errors.email?.message : "Email"}
              </Label>
              <Input
                type="text"
                id="email"
                className="rounded-sm focus-visible:ring-0 mt-1"
                placeholder="Email"
                {...register("email", {
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  required: true,
                })}
              />
            </div>
            <div>
              <Label
                htmlFor="phone"
                className={`block text-sm font-medium ${
                  errors.phone ? "text-red-400" : "text-gray-700"
                } `}
              >
                {errors.phone ? errors.phone?.message : "Phone"}
              </Label>
              <Input
                type="text"
                id="phone"
                className="rounded-sm focus-visible:ring-0 mt-1"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className={`block text-sm font-medium ${
                  errors.message ? "text-red-400" : "text-gray-700"
                } `}
              >
                {errors.message ? errors.message?.message : "Message"}
              </Label>
              <Textarea
                id="message"
                placeholder="Message"
                className="rounded-sm focus-visible:ring-0 mt-1"
                {...register("message", {
                  required: true,
                })}
              />
            </div>
            <Button className="w-full" disabled={!isValid}>
              Send
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
