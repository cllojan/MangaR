import React, { FC, use } from 'react'
interface pageProps{
    params:{code:string,id:string}
}
async function getHome(code:string,id:string) {
    
    return await (
      await fetch(`${process.env.LOCAL}/api/library/${code}/${id}?data=1`,{
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "sec-ch-ua":
            '"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
        },
        referrer: `https://lectormanga.com/library/*/64196/*`,
        referrerPolicy: "no-referrer-when-downgrade",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      })
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
    console.log(datas)
  return (
    <div>
        {
            datas.data?.container.map((elm:string,id:number) => (
                <i key={id}>{elm}</i>
            ))
        }
    </div>
  )
}

export default page