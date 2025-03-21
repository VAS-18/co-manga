"use client";

import Image from "next/image";
import logo from "@/public/image/logo.jpg";
import { Button } from "@/components/ui/button";

const Notfound = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-10">
      <div className="">
        <Image src={logo} alt="logo" height={50} width={50} priority />
      </div>
      {"NOT FOUND"}
      <div>
        <Button onClick={() => (window.location.href = "/")}>GO BACK</Button>
      </div>
    </div>
  );
};

export default Notfound;
