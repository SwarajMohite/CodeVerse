let prompt = document.querySelector("#prompt");
let submitbtn = document.querySelector("#submit");
let chatContainer = document.querySelector(".chat-container");
let imagebtn = document.querySelector("#image");
let image = document.querySelector("#image img");
let imageinput = document.querySelector("#image input");

const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDH8c5t5DV-Ac587N8S0in7zTlJ9z8kUHU";

let chatHistory = []; // Store conversation history

let user = {
    message: null,
    file: {
        mime_type: null,
        data: null
    }
};

// Function to send message & handle responses
async function generateResponse(aiChatBox) {
    let text = aiChatBox.querySelector(".ai-chat-area");

    // Add user's latest message to history
    chatHistory.push({ role: "user", content: user.message });

    // Prepare request payload with full chat history
    let requestBody = {
        "contents": [
            {
                "parts": chatHistory.map(entry => ({ text: entry.content }))
            }
        ]
    };

    try {
        let response = await fetch(Api_Url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        let data = await response.json();
        let apiResponse = data.candidates[0]?.content?.parts[0]?.text || "I'm not sure about that.";
        apiResponse = apiResponse.replace(/\*\*(.*?)\*\*/g, "$1").trim();

        // Add AI's response to chat history
        chatHistory.push({ role: "assistant", content: apiResponse });

        // Display AI response in chat
        text.innerHTML = apiResponse;
    } catch (error) {
        console.log("Error:", error);
        text.innerHTML = "Oops! Something went wrong.";
    } finally {
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
        image.src = `images/chatbot-01.png`;
        image.classList.remove("choose");
        user.file = {};
    }
}

// Function to create chat box
function createChatBox(html, classes) {
    let div = document.createElement("div");
    div.innerHTML = html;
    div.classList.add(classes);
    return div;
}

// Function to handle user chat input
function handlechatResponse(userMessage) {
    if (!userMessage.trim()) return; // Ignore empty messages

    user.message = userMessage;

    let html = `<img src="user.png" alt="" id="userImage" width="8%">
        <div class="user-chat-area">
            ${user.message}
            ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
        </div>`;
    
    prompt.value = "";
    let userChatBox = createChatBox(html, "user-chat-box");
    chatContainer.appendChild(userChatBox);

    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });

    setTimeout(() => {
        let html = `<img src="images/chatbot-01.png" alt="" id="aiImage" width="10%">
            <div class="ai-chat-area">
                <img src="images/chatbot-01.png" alt="" class="load" width="50px">
            </div>`;
        let aiChatBox = createChatBox(html, "ai-chat-box");
        chatContainer.appendChild(aiChatBox);
        generateResponse(aiChatBox);
    }, 600);
}

// Event Listeners for sending messages
prompt.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        handlechatResponse(prompt.value);
    }
});

submitbtn.addEventListener("click", () => {
    handlechatResponse(prompt.value);
});

// Handling image input for file uploads
imageinput.addEventListener("change", () => {
    const file = imageinput.files[0];
    if (!file) return;
    
    let reader = new FileReader();
    reader.onload = (e) => {
        let base64string = e.target.result.split(",")[1];
        user.file = {
            mime_type: file.type,
            data: base64string
        };
        image.src = `data:${user.file.mime_type};base64,${user.file.data}`;
        image.classList.add("choose");
    };
    reader.readAsDataURL(file);
});

imagebtn.addEventListener("click", () => {
    imagebtn.querySelector("input").click();
});