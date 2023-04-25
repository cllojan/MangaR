import { type NextRequest } from "next/server";
export async function GET(req: NextRequest, { params }) {
  try {
    let param = req.nextUrl;
    console.log(param.searchParams);
    console.log(params);
    return new Response(
      JSON.stringify({ Data: param.searchParams.get("search") })
    );
  } catch (e) {
    return new Response(JSON.stringify({ Error: "Error" }));
  }
}
