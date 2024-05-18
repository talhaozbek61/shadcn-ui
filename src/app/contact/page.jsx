"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState();
  const onSubmit = (data) => {
    setData(data);
  };
  return (
    <div className="mx-auto max-w-2xl py-8 lg:py-12">
      {data ? (
        <Response data={data} />
      ) : (
        <>
          <h1 className="text-3xl font-semibold text-center">Contact</h1>
          <form className="py-4 space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="name" className={errors.name && "text-red-500"}>
                {errors.name ? "Please Enter Name" : "Name"}
              </Label>
              <Input
                type="text"
                id="name"
                className="rounded-sm focus-visible:ring-0"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div>
              <Label htmlFor="email" className={errors.email && "text-red-500"}>
                {errors.email ? "Please Enter Email" : "Email"}
              </Label>
              <Input
                type="text"
                id="email"
                className="rounded-sm focus-visible:ring-0"
                {...register("email", {
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  required: true,
                })}
              />
            </div>
            <div>
              <Label htmlFor="phone" className={errors.phone && "text-red-500"}>
                {errors.phone ? "Please Enter Phone Number" : "Phone"}
              </Label>
              <Input
                type="text"
                id="phone"
                className="rounded-sm focus-visible:ring-0"
                {...register("phone", { required: true })}
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className={errors.message && "text-red-500"}
              >
                {errors.message ? "Please Enter Message" : "Message"}
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                className="rounded-sm focus-visible:ring-0"
                {...register("message", {
                  required: true,
                })}
              />
            </div>
            <Button className="w-full">Send</Button>
          </form>
        </>
      )}
    </div>
  );
}

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
