const express = require("express");
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(express.json());

const configuration = new Configuration({
    apiKey: "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",
    organization: "org-gBJQApEjMxLoIV6lnUMvimwN" 
})

const openai = new OpenAIApi(configuration);

app.get("/", async (request, response) => {
    try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: "Write something about sun. In one line.",
        });
        console.log(completion.data.choices[0].text);
        response.status(200).end(JSON.stringify(completion.data))
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
})


app.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));