import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
    try {
        const db = await pool.getConnection()
        const query = 'select * from estadisticaspitchers'
        const [rows] = await db.execute(query)
        db.release()
        
       // return NextResponse.json(rows)
       return new Response(JSON.stringify(rows), {
        // Set CORS headers here
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow requests from all origins (replace with specific origins if needed)
          'Access-Control-Allow-Methods': 'GET', // Allowed methods (adjust as needed)
          'Access-Control-Allow-Headers': 'Content-Type', // Allowed headers (adjust as needed)
        },
      });
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}