import { use } from "react";
import Item from "./Components/Item";


interface MItem {
  title: string;
  href: string;
  img: string;
  type: string;
}
async function getHome() {
  return await (
    await fetch(`${process.env.LOCAL}/api/home`,{
      cache:'no-cache'
    })
  ).json();
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
    <div className="container mx-auto px-10 py-20">
      <div className="flex items-center justify-between">
      {data.populares?.map((elm: any, id: number) => (        
        <Item key={id} title={elm.title} href={elm.href} img={elm.img} type={elm.type} />        
      ))}
      </div>      
    </div>
  );
}
