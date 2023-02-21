import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between space-x-2 font-bold px-10
py-5"
    >
      <div className="flex items-center space-x-2">
        <Link href='https://github.com/ksalpern'>
        <Image
        src='https://yt3.ggpht.com/yti/AHXOFjUAbLJEGwm2gI6JRDt4fEReENGNkKhGkU4S4jhbBeM=s88-c-k-c0x00ffffff-no-rj-mo'
        width={50}
        className='rounded-full'
        height={50}
        alt='logo'
        />
        </Link>
        <h1>Frontend Dev</h1>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
