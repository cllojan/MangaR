import Link from "next/link";
import Image from "next/image";
import React from "react";

interface MItem {
  
  title: string;
  date: string;
  link: string;
  code:string;
}

const Lists = ({ title,date,link,code }:MItem) => {
  let aa = /\/\w+/gi

  const href = JSON.parse(JSON.stringify(String(link).match(aa)));
  //const newHref = JSON.parse(JSON.stringify(String(link).match(aa)))[0].replace(/\//gi,"")
  //const links = `${process.env.LOCAL}library/${newHref}`
  let url = `${process.env.LOCAL}/library/${code}${href[2]}`
  
  return (
    <Link className="" href={url}>
      <h1>{title}</h1>      
      <span>{date}</span>
    </Link>
  );
};

export default Lists;
