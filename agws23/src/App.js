import { useState } from "react";
import "./App.css";
import Studyplan from "./Components/Studyplan";

const { Configuration, OpenAIApi } = require("openai");

function App() {
  const configuration = new Configuration({
    // apiKey: "API HERE",
  });

  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");

  const givePlan = async () => {
    const openaitext = {
      model: "text-davinci-003",
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
      prompt: input,
    };

    const response = await openai.createCompletion(openaitext);

    console.log(openaitext);
    console.log(response);
  };

  return <Studyplan givePlan={givePlan} setInput={setInput} />;
}

export default App;
