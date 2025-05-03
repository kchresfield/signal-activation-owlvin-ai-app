// src/app/api/create-assistant/route.js
import 'dotenv/config';
import { NextResponse } from 'next/server';
const {NGROK_SERVER, QA_SERVER} = process.env;

export async function POST(request) {
    
    let server = QA_SERVER? QA_SERVER: NGROK_SERVER;
    console.log(server)
    
    try {
      const { phoneNumber, personality, tone, topic } = await request.json();

    const res = await fetch(`${server}/create-assistant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, personality, tone, topic }),
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data from external API');
    }
    // console.log("res: ", res);
    const data = await res.json();
    console.log("data: ", data)
    return NextResponse.json(data);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
