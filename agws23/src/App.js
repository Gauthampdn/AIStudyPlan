import { useState } from "react";
import Form from "./Form";
import './App.css';
import ReactMarkdown from 'react-markdown';

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

function App() {
  const [responseText, setResponseText] = useState("");

  const handleFormSubmit = async (plan) => {
    console.log(plan);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: plan,
      temperature: 0.5,
      max_tokens: 300,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,

    });

    console.log(response.data.choices[0].text);
    
    setResponseText(response.data.choices[0].text);
  };

  return (
    <div>
      <h1>The Ultimate Plan Maker</h1>
      <h4>Meet Otto, a brilliant plan maker with sharp intellect and unwavering focus. His precise and efficient strategies earn him a true genius reputation.</h4>
      <Form onFormSubmit={handleFormSubmit} />
      <ReactMarkdown>{responseText}</ReactMarkdown>

    </div>
  );
  
  
  
}

export default App;
