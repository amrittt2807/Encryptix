import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="min-w-full container p-12 flex justify-between items-center">
      <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image 
            src="/images/profile-image.png"
            alt="Profile image"
            className="rounded-full"
            width={70}
            height={70}
          />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
