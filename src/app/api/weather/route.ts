import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const latitude = searchParams.get('latitude');
    const longitude = searchParams.get('longitude');

    if (!latitude || !longitude) {
        return NextResponse.json({ error: 'Latitude and Longitude are required' }, { status: 400 });
    }

    try {
        const response = await axios.get('https://weatherunion.com/gw/weather/external/v0/get_weather_data', {
            params: { latitude, longitude },
            headers: {
                'x-zomato-api-key': process.env.API_KEY,
                'Content-Type': 'application/json',
            },
        });

        if (response.data) {
            return NextResponse.json(response.data);
        } else {
            return NextResponse.json({ error: 'Weather data not found' }, { status: 404 });
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message, data: {}, status: 500 }, { status: 500 });
    }
}
