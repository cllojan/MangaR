import React, { FC, use } from 'react'
interface pageProps{
    params:{code:string,id:string}
}
async function getHome(code:string,id:string) {
    
    return await (
      await fetch(`${process.env.LOCAL}/api/library/${code}/${id}`)
    ).json();
}
/*
async function fetchBlob(url:string) {
    const response = await fetch(url,);

    // Here is the significant part 
    // reading the stream as a blob instead of json
    let res = await response.blob();
    let data = URL.createObjectURL(res);
    return data;
}*/
const page:FC<pageProps> = ({params}) => {
    let datas = use(getHome(params.code,params.id))
    console.log(datas.data)
  return (
    <div>
        {
            datas.data?.container.map((elm:string,id:number) => (
                <img src={elm} key={id} width={300}/>
            ))
        }
    </div>
  )
}

export default page