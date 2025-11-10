// app/api/countries/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // ✅ include fields parameter to avoid 400
    const endpoint = "https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags";
    const r = await fetch(endpoint, { cache: "no-store" }); // no headers

    if (!r.ok) {
      const msg = await r.text().catch(() => "");
      console.error("RestCountries error:", r.status, msg);
      return NextResponse.json(
        { error: "Failed to fetch countries", status: r.status },
        { status: r.status }
      );
    }

    const json = await r.json();

    // normalize output
    const parsed = (json || [])
      .map((c: any) => {
        let callingCode = "";
        if (c?.idd?.root) {
          const root = c.idd.root;
          const suffix = Array.isArray(c.idd.suffixes) ? c.idd.suffixes[0] : "";
          callingCode = `${root}${suffix || ""}`;
        }

        if (callingCode && !callingCode.startsWith("+")) callingCode = `+${callingCode}`;
        return {
          name: c?.name?.common || "Unknown",
          cca2: c?.cca2 || "",
          callingCode,
          flag: c?.flags?.svg || c?.flags?.png || "",
        };
      })
      .filter((x: any) => x.callingCode)
      .sort((a: any, b: any) => a.name.localeCompare(b.name));

    return NextResponse.json(parsed, { status: 200 });
  } catch (err) {
    console.error("Proxy fetch failed:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
