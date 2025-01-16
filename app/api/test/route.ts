import { NextResponse } from 'next/server';


export async function POST(){
    // const data = await res.json()
    return NextResponse.json({ message: 'TESTING REQUEST' })
}

// export async function GET(){
//     return NextResponse.json({ message: 'TESTING REQUEST FROM GET' })
// }