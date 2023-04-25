import { data } from "@/utils/models";
import cheerio from "cheerio";

type Result = Array<Object> | Error;
const getLastUpdate = async (): Promise<Result> => {
  try {
    const url = "https://lectormanga.com/";
    let manga: Array<Object> = [];
    const response = await fetch(url);
    const data = await response.text();

    const $ = cheerio.load(data);
    $(
      "#app > div > div:nth-child(2) > div.col-12.col-lg-8 > div:nth-child(6) > div:nth-child(2) > div > table > tbody tr"
    ).each((item, el) => {
      const type = $(el).find("td:nth-child(1) > a > span").text().trim();

      const name = $(el).find("td:nth-child(2) > a > div > span").text().trim();
      const href = $(el).find("a").attr("href");

      manga.push({ name, type, href });
    });
    //let hash = {};
    /*
    manga = manga.filter((elm) =>
      hash[elm.name] ? false : (hash[elm.name] = true)
    );*/

    return manga;
  } catch (e) {
    return new Error("Error");
  }
};

export default getLastUpdate;
