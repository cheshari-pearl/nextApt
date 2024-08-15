
export async function POST(request: Request) {
    const baseUrl = process.env.BASE_URL;
    const { username, password } = await request.json();
    if (!username || !password) {
        return new Response('Username or password missing', {
            status: 400,
        });
    }
    try {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();
        return new Response(JSON.stringify(result), {
            status: 201,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new Response((error as Error).message, {
            status: 500
        });
    }
}
