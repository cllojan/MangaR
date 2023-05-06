import Link from "next/link";
import Image from "next/image";
import React from "react";

interface MItem {
  title: string;
  href: string;
  img: string;
  type: string;
}

const item = ({ title,href,img,type }:MItem) => {
  
  return (
    <Link className="" href={href}>
      <h1>{title}</h1>
      <Image src={img} alt={title} width={100} height={100}></Image>
      <span>{type}</span>
    </Link>
  );
};

export default item;
