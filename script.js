async function getResponse() {
    const userInput = document.getElementById("userInput").value
    const response = await fetch('./api/getOpenAIResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userInput}),
    });

    const data = await response.json()

    // Display the assistant's response
    document.getElementById("chatOutput").innerHTML += `<p>${data.response}</p>`
}