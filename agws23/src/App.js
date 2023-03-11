import { useState } from "react";
import Form from "./Form";
import './App.css';

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "API HERE",
});

const openai = new OpenAIApi(configuration);

function App() {
  const [studyPlan, setStudyPlan] = useState(null);
  const [responseText, setResponseText] = useState("");

  const handleFormSubmit = async (plan) => {
    setStudyPlan(plan);
    console.log(plan);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: plan,
      temperature: 0.5,
      max_tokens: 200,
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
      <p dangerouslySetInnerHTML={{ __html: responseText }}></p>
    </div>
  );
  
  
  
}

export default App;
