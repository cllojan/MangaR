import { type NextRequest } from "next/server";
export async function GET(req: NextRequest, { params }: any) {
  let id = params;
  let other = req.nextUrl;
  console.log(id);
  return new Response(JSON.stringify({ data: other.searchParams.get("data") }));
}
