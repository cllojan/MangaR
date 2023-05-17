import React, { FC, use } from 'react'
import Image from "next/image";
import Link from 'next/link';
import Item from '@/app/Components/Item';
import Lists from '@/app/Components/Lists';

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
    <div className='static '>
       
        <div className="-z-10 absolute bg-black w-full h-96 ">
            
        </div>
        
        <div className="absolute rounded-md	 bg-white z-10 w-11/12 h-3/5 top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="">{data.data.title}</h1>
          <span>{data.data.type}</span>
          <Image src={data.data.img} alt={''} width={100} height={100}/>
          <div className="chapter">
            {
                data?.data.chapters.map((elm:any,id:number) => (
                  <Lists code={params.code} key={id} title={elm.title} link={elm.link} date={elm.date} />                              
                    
                ))
            }
        </div>
        </div>
        
    </div>
  )
}

export default page