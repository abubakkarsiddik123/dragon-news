'use client'
import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimmingImage from '../../../assets/swimming.png'
import classImage from '../../../assets/class.png'
import plyGroundImage from '../../../assets/playground.png'
import bgImage from '../../../assets/bg.png'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const RightSideBar = () => {
  const handleGoogleSignIn =async()=>{
      const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
  }
  const handleGithubSignIn =async()=>{
      const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data);
  }
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500" onClick={handleGoogleSignIn}><FaGoogle /> Login With Google</button>
        <button className="btn" onClick={handleGithubSignIn}><FaGithub/> Login With GitHub</button>
      </div>
      <h2 className="font-bold text-lg mt-4">Find Us On</h2>
      <div className="flex flex-col gap-2 mb-4">
        <button className="btn"><FaFacebook/>FaceBook</button>
        <button className="btn"><FaTwitter/>Twitter</button>
        <button className="btn"><FaInstagram/>instagram</button>
      </div>
        <h2 className="font-bold text-lg mb-2">Q-Zone</h2>
      <div className="bg-[#F3F3F3] mb-4">
        <Image src={swimmingImage} alt="swimmingImage" className="mx-auto"/>
        <Image src={classImage} alt="swimmingImage" className="mx-auto"/>
        <Image src={plyGroundImage} alt="swimmingImage" className="mx-auto"/>
      </div>
        <Image src={bgImage} alt="swimmingImage" className="mx-auto" width={400}/>
    </div>
  );
};

export default RightSideBar;
