import type { NextApiRequest, NextApiResponse } from 'next';

export async function proxyRequest(
  req: NextApiRequest,
  res: NextApiResponse,
  targetUrl: string,
  method: string = 'GET'
) {
  try {
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (method !== 'GET' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(targetUrl, fetchOptions);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ message: 'Proxy request failed' });
  }
}
