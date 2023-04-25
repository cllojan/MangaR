import cheerio from "cheerio";

export async function GET(request: Request) {
  try {
    const url = "https://lectormanga.com/";
    let manga = {
      status: 200,
      populares: new Array(),
    };
    const response = await fetch(url);
    const data = await response.text();
    const $ = cheerio.load(data);

    //Populares
    $(
      "#app > div > div:nth-child(2) > div.col-12.col-lg-8 > div:nth-child(2) .card"
    ).each((item, el) => {
      const title = $(el).find("a").text().trim();
      const href = $(el).find("a").attr("href");
      const img = $(el).find("img").attr("src");
      const type = $(el).find("span.float-right").text().trim();

      manga.populares.push({ title, href, img, type });
    });

    return new Response(JSON.stringify(manga));
  } catch (e) {
    return new Response(JSON.stringify({ hola: "a" }));
  }
}
