const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const botMessage = async(message) => {
    const response = await openai.createCompletion("text-davinci-002", {
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