// src/app/api/meta/countries/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fields = "name,cca2,region,languages";
    const res = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`, {
      // you can add a short timeout pattern if you want; keep simple for now
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, status: res.status, error: "Upstream failed" }, { status: 502 });
    }
    const data = await res.json();
    // Option: transform and return only what you need to reduce client payload
    const countries = data.map((c: any) => ({
      name: c?.name?.common ?? c?.name ?? "",
      code: c?.cca2 ?? "",
      region: c?.region ?? "",
      languages: c?.languages ?? {},
    }));

    // Cache the result at CDN/edge for 1 hour if desired:
    return NextResponse.json({ ok: true, countries }, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=60",
      },
    });
  } catch (err) {
    console.error("api/meta/countries error", err);
    return NextResponse.json({ ok: false, error: "Internal" }, { status: 500 });
  }
}
