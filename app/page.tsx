import Image from "next/image";
import styles from "./page.module.css";
import getLastUpdate from "@/Components/getLastUpdates";
import { json } from "stream/consumers";
import { use } from "react";

async function getHome(){
  return await( await fetch(`${process.env.LOCAL}/api/home`,{cache:'no-store'})).json();
}
export default function Home() {
  //const data = getLastUpdate().then((elm) => console.log(elm));
  
  const data = use(getHome());
  /*
  let aa = /\/\d+\//gi
      const href = JSON.parse(JSON.stringify(String(tempHref).match(aa)))[0].replace(/\//gi,"")
      const link = `${process.env.LOCAL}api/library/${href}`
  */


  return (
    <div className=''>
      {
        data.populares?.map((elm:any,id:number) => (
          <h1 key={id}>{elm.title}</h1>
        ))
      }
    </div>
  );
}
