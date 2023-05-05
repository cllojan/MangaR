import { NextRequest } from "next/server";
import cheerio from "cheerio";
import { match } from "assert";
interface HomeData {
    status: number;
    data: {};
  }
export async function GET(request:NextRequest,{params}:any){
    try {
        let param = request.nextUrl;    
        let val = Number(param.searchParams.get("data"))
        
        
        //const url = `https://lectormanga.com/library/*/${params.code}/*`;
        const url = `https://lectormanga.com/view_uploads/${params.id}`;
        let manga: HomeData = {
          status: 200,
          data: {
            code:params.code,
            id:params.id
          },
    
        };
        
        const response = await fetch(url, {
          "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Microsoft Edge\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
          },
          "referrer": `https://lectormanga.com/library/*/${params.code}/*`,
          "referrerPolicy": "no-referrer-when-downgrade",
          "body": null,
          "method": "GET",
          "mode": "cors",
          "credentials": "include"
        });
        const data = await response.text();
        const getDomain = /domain=[A-Za-z]+.com/gi
        let getParamLector= /TMOUpload_\w+/gi
        const resHeader = await response.headers.get("set-cookie")
        
        let domain = JSON.parse(JSON.stringify(String(resHeader).match(getDomain)))[0].replace("domain=","")
        let paramLector = JSON.stringify(data.match(getParamLector)).replace(/\W+/gi,"").replace("TMOUpload_",'');
        let externalURL = `https://${domain}/news/${paramLector}/cascade`;

        const extResp = await fetch(externalURL,{
          "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Microsoft Edge\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
          },
          "referrer": `https://lectormanga.com/library/*/${params.code}/*`,
          "referrerPolicy": "no-referrer-when-downgrade",
          "body": null,
          "method": "GET",
          "mode": "cors",
          "credentials": "include"
        })
        const lector = await extResp.text();
        console.log(lector);
        const $ = cheerio.load(lector);
        
       /*
        let last: Array<object> = [];
        let next: Array<object> = [];
        let chapterInfos = $("#chapters .chapter-list")
        let getChapters = $("#chapters h4.text-truncate");
        console.log(getChapters.length)

        //capitulos siguientes
        if(val == 0 ){
          next.push({empty:"Ultimo Capitulo"})
        }else{
          $(getChapters[val-1]).each((id, el) => {
            let title = $(el).text().trim()         
            let date = $(chapterInfos[val-1]).find("li:nth-child(1) > div > div.col-6.col-sm-6.col-md-2.text-center > span").text().trim()        
            let link = $(chapterInfos[val-1]).find("li:nth-child(1) > div > div.col-6.col-sm-2.text-right > a").attr("href");
      
            next.push({ title, date, link });
          });
  
        }
        //capitulo anterior
        if(val >=getChapters.length-1){
          last.push({empty:"Es el primer capitulo :v"})
        }else{
          $(getChapters[val+1]).each((id, el) => {
            let title = $(el).text().trim()
           
            let date = $(chapterInfos[val+1]).find("li:nth-child(1) > div > div.col-6.col-sm-6.col-md-2.text-center > span").text().trim()
            let link = $(chapterInfos[val+1]).find("li:nth-child(1) > div > div.col-6.col-sm-2.text-right > a").attr("href");
      
            last.push({ title, date, link });
          });
        }
        
      
    
        manga.data = { ...manga.data, last,next }
        */
        return new Response(JSON.stringify(manga));
      } catch (e) {
    
    
        
        return new Response(JSON.stringify({ error: e }));
      }
}