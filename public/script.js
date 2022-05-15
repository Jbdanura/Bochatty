const messages = document.querySelector(".messages")

const generateMessage = (message,bot) => {
    const div = document.createElement("div")
    if(bot){
        div.classList.add("message-bot")
    } else {
        div.classList.add("message-me")
    }
    const p = document.createElement("p")
    p.innerHTML = message
    div.appendChild(p)
    messages.append(div)
}

const button = document.querySelector(".button-send")

button.addEventListener("click",async function(){
    const input = document.querySelector(".my-message")
    const myMessage = input.value
    input.value = ""
    if(myMessage.trim().length != 0){
        generateMessage(myMessage,false)
        messages.scrollTop = messages.scrollHeight
        try{
            const response = await fetch(`${window.location.href}/message`,{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: myMessage
                })
            })
            const body = await response.json()
            generateMessage(body,true)
        }catch(error){
            console.log(error)
        }
    }
    
    messages.scrollTop = messages.scrollHeight
})

document.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        button.click()
    }
})