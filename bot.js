require("dotenv").config()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.apiKey,
});
const openai = new OpenAIApi(configuration);

const botMessage = async(message)=>{
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `You: ${message}\nFriend:`,
    temperature: 0.9,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
  });  
  return response.data.choices[0].text
}

module.exports = botMessage