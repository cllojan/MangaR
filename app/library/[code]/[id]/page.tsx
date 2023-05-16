import React, { FC, use } from 'react'
interface pageProps{
    params:{code:string,id:string}
}
async function getHome(code:string,id:string) {
    
    return await (
      await fetch(`${process.env.LOCAL}/api/library/${code}/${id}`,{
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "cache-control": "max-age=0",
          "if-modified-since": "Sun, 14 May 2023 23:09:42 GMT",
          "if-none-match": "\"64616a36-98888\"",
          "sec-ch-ua": "\"Microsoft Edge\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "__qca=P0-341003098-1679583352555; euconsent-v2=CPpSJ0APpSJ0AAKAuAESC9CsAP_AAH_AAAiQJTtd_H__bW9r-f5_aft0eY1P9_r77uQzDhfNk-4F3L_W_LwX52E7NF36tq4KmR4ku1LBIUNlHNHUDVmwaokVryHsak2cpTNKJ6BEkHMZO2dYGF5vmxtj-QKY5_5_d3bx2D-t_9v-39z3z81Xn3d5_-_02PCdU5_9Dfn9fR_b89KP9_78v8v8_9_rk3_e3_3_79_7_H9-eCUYBJhq3EAXZljgzaBhFAiBGFYSEUCgAgoBhaICABwcFOysAn1hEgAQCgCMCIEOAKMCAQAACQBIRABIEWCAAAEQCAAEACARCABgYBBYAWAgEAAIBoGKIUAAgSEGRERFKYEBUCQQEtlQglBdIaYQBVlgBQCI2CgARBICKwABAWDgGCJASsWCBJiDaIARgBQCiVCtRSemgIAA.YAAAAAAAAAAA; addtl_consent=1~39.4.3.9.6.9.13.6.4.15.9.5.2.11.1.7.1.3.2.10.3.5.4.21.4.6.9.7.10.2.9.2.18.7.20.5.20.6.5.1.4.11.29.4.14.4.5.3.10.6.2.9.6.6.9.4.4.29.4.5.3.1.6.2.2.17.1.17.10.9.1.8.6.2.8.3.4.146.8.42.15.1.14.3.1.18.25.3.7.25.5.18.9.7.41.2.4.18.21.3.4.2.7.6.5.2.14.18.7.3.2.2.8.20.8.8.6.3.10.4.20.2.13.4.6.4.11.1.3.22.16.2.6.8.2.4.11.6.5.33.11.8.1.10.28.12.1.3.21.2.7.6.1.9.30.17.4.9.15.8.7.3.6.6.7.2.4.1.7.12.13.22.13.2.12.2.10.1.4.15.2.4.9.4.5.4.7.13.5.15.4.13.4.14.10.15.2.5.6.2.2.1.2.14.7.4.8.2.9.10.18.12.13.2.18.1.1.3.1.1.9.25.4.1.19.8.4.5.3.5.4.8.4.2.2.2.14.2.13.4.2.6.9.6.3.2.2.3.5.2.3.6.10.11.6.3.16.3.11.3.1.2.3.9.19.11.15.3.10.7.6.4.3.4.6.3.3.3.3.1.1.1.6.11.3.1.1.11.6.1.10.5.2.6.3.2.2.4.3.2.2.7.15.7.14.1.3.3.4.5.4.3.2.2.5.4.1.1.2.9.1.6.9.1.5.2.1.7.10.11.1.3.1.1.2.1.3.2.6.1.12.5.3.1.3.1.1.2.2.7.7.1.4.1.2.6.1.2.1.1.3.1.1.4.1.1.2.1.8.1.7.4.3.2.1.3.5.3.9.6.1.15.10.28.1.2.2.12.3.4.1.6.3.4.7.1.3.1.1.3.1.5.3.1.3.4.1.1.4.2.1.2.1.2.2.2.4.2.1.2.2.2.4.1.1.1.2.2.1.1.1.1.2.1.1.1.2.2.1.1.2.1.2.1.7.1.2.1.1.1.2.1.1.1.1.2.1.1.3.2.1.1.8.1.1.6.2.1.6.2.3.2.1.1.1.2.2.3.1.1.4.1.1.2.2.1.1.4.3.1.2.2.1.2.1.2.3.1.1.2.4.1.1.1.5.1.3.6.3.1.5.2.3.4.1.2.3.1.4.2.1.2.2.2.1.1.1.1.1.1.11.1.3.1.1.2.2.5.2.3.3.5.1.1.1.4.2.1.1.2.5.1.9.4.1.1.3.1.7.1.4.5.1.7.2.1.1.1.2.1.1.1.4.2.1.12.1.1.3.1.2.2.3.1.2.1.1.1.2.1.1.2.1.1.1.1.2.4.1.5.1.2.4.3.8.2.2.9.7.2.2.1.2.1.4.6.1.1.6.1.1.2.6.3.1.2.201.300.100"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
      })
    ).json();
}

const page:FC<pageProps> = ({params}) => {
    let datas = use(getHome(params.code,params.id))
  
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