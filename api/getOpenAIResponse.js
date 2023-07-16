import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { userInput } = req.body;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    { "role": "system", "content": "You are a helpful assistant." },
                    { "role": "user", "content": userInput }
                ]
            })
        });

        if (!response.ok) {
            const text = await response.text();
            console.error(`OpenAI API responded with ${response.status}: ${text}`);
            throw new Error(`OpenAI API responded with ${response.status}`);
        }

        const data = await response.json();

        res.json({response: data.choices[0].message.content});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.toString()});
    }
};