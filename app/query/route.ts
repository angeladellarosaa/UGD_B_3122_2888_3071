import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  try {
    // Kita biarkan ini kosong atau tes sederhana saja
    return Response.json({ message: "Query route active" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
