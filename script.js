async function getResponse() {
    const input = document.getElementById("userInput").value
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
                { "role": "user", "content": input }
            ]
        })
    })

    const data = await response.json()


    // Display the assistant's response
    document.getElementById("chatOutput").innerHTML += `<p>${data.choices[0].message.content}</p>`
}