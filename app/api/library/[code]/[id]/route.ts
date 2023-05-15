import { NextRequest } from "next/server";
import cheerio from "cheerio";
import { match } from "assert";
import { attr } from "cheerio/lib/api/attributes";
interface HomeData {
  status: number;
  data: {};
}
export async function GET(request: NextRequest, { params }: any) {
  try {
    let param = request.nextUrl;
    let val = Number(param.searchParams.get("data"));

    const urlNL = `https://lectormanga.com/library/*/${params.code}/*`;
    const url = `https://lectormanga.com/view_uploads/${params.id}`;
    let manga: HomeData = {
      status: 200,
      data: {
        
      },
    };
    const responseNL = await fetch(urlNL,{
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
      referrer: `https://lectormanga.com`,
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "cors",      
      credentials: "include",
    })
    const response = await fetch(url, {
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
      referrer: `https://lectormanga.com/library/*/${params.code}/*`,
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "cors",      
      credentials: "include",
    });
    const data = await response.text();
    
    const dataNL = await responseNL.text();
    

    const getDomain = /domain=[A-Za-z]+.com/gi;
    let getParamLector = /TMOUpload_\w+/gi;
    const resHeader = await response.headers.get("set-cookie");

    let domain = JSON.parse(
      JSON.stringify(String(resHeader).match(getDomain))
    )[0].replace("domain=", "");
    let paramLector = JSON.stringify(data.match(getParamLector))
      .replace(/\W+/gi, "")
      .replace("TMOUpload_", "");
    let externalURL = `https://${domain}/news/${paramLector}/paginated/1`;

    const extResp = await fetch(externalURL, {
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
      referrer: `https://lectormanga.com`,
      referrerPolicy: "no-referrer-when-downgrade",      
      method: "GET",
      mode: "cors",           
    });
    const lector = await extResp.text();
    
    const $ = cheerio.load(lector);
    const item = cheerio.load(dataNL);
    
    let container: string[] = [];
   //lector
    const dirPath = /var\s+dirPath\s+=\s+'(.+?)'/gi
    const imagesRX = /var\s+images\s+=\s+JSON\.parse\('(.+?)'\);/gi
    lector.match(imagesRX)
    
    let path = JSON.parse(JSON.stringify(lector.match(dirPath)).replace(/var\s+dirPath\s+=\s+'/gi,''))[0].replace(/'/gi,'');
    let images = JSON.parse(JSON.parse(JSON.stringify(lector.match(imagesRX)).replace(/var\s+images\s+=\s+JSON\.parse\('(.+?)'\)/,'$1'))[0].replace(';',""));
    console.log(images);
    manga.data = { container };
    
    let last: Array<object> = [];
    let next: Array<object> = [];
    let chapterInfos = item("#chapters .chapter-list");
    let getChapters = item("#chapters h4.text-truncate");
    

    //capitulos siguientes
    if (val == 0) {
      next.push({ empty: "Ultimo Capitulo" });
    } else {
      item(getChapters[val - 1]).each((id, el) => {
        let title = item(el).text().trim();
        let date = item(chapterInfos[val - 1])
          .find(
            "li:nth-child(1) > div > div.col-6.col-sm-6.col-md-2.text-center > span"
          )
          .text()
          .trim();
        let link = item(chapterInfos[val - 1])
          .find("li:nth-child(1) > div > div.col-6.col-sm-2.text-right > a")
          .attr("href");

        next.push({ title, date, link });
      });
    }
    //capitulo anterior
    if (val >= getChapters.length - 1) {
      last.push({ empty: "Es el primer capitulo :v" });
    } else {
      item(getChapters[val + 1]).each((id, el) => {
        let title = item(el).text().trim();

        let date = item(chapterInfos[val + 1])
          .find(
            "li:nth-child(1) > div > div.col-6.col-sm-6.col-md-2.text-center > span"
          )
          .text()
          .trim();
        let link = item(chapterInfos[val + 1])
          .find("li:nth-child(1) > div > div.col-6.col-sm-2.text-right > a")
          .attr("href");

        last.push({ title, date, link });
      });
    }

    manga.data = { ...manga.data, last, next };

    return new Response(JSON.stringify(manga));
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ error: e }));
  }
}
