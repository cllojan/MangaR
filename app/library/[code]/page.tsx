import React, { FC, use } from 'react'
import Image from "next/image";

interface pageProps{
    params:{code:string}
}
async function getHome(code:string) {
    return await (
      await fetch(`${process.env.LOCAL}/api/library/${code}`)
    ).json();
  }
const page:FC<pageProps> = ({params}) => {    
    
    let data = use(getHome(params.code))
    
  return (
    <div>
        <h1>{data.data.title}</h1>
        <span>{data.data.type}</span>
        <Image src={data.data.img} alt={''} width={100} height={100}/>
        <div className="chapter">
            {
                data?.data.chapters.map((elm:any,id:number) => (
                    <h1 key={id}>{elm.title}</h1>
                ))
            }
        </div>
    </div>
  )
}

export default page