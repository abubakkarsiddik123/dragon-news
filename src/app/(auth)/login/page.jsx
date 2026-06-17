"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = (data) => {
    console.log(data, "data");
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address?</legend>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input"
              placeholder="Enter Your Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input"
              placeholder="Enter Your Password"
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-slate-700 text-white">Login</button>
        </form>
        <p className="mt-4">
          Dont’t Have An Account ?{" "}
          <Link href={"/register"} className="text-red-400">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
