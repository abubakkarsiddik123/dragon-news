"use client";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegisterFunc = (data) => {
    console.log(data, "data");
    const {email,name,password,photo}=data
    console.log(email,name);
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              {...register("photo", { required: "Photo URL is required" })}
              className="input"
              placeholder="Enter Your Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email </legend>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input"
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-700 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
