import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    const res = await fetch('https://www.ebi.ac.uk/pdbe/api/motifs/2OZB', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = await res.json();
    return NextResponse.json(data);
}

export async function POST() {
    const res = await fetch('https://www.ebi.ac.uk/pdbe/api/motifs/2OZB', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
        },
        body: JSON.stringify({this: THISISWHERETXTWOULDGO}),
})
const data = await res.json();
return NextResponse.json(data);
}
