import { useState } from 'react';
import useLLM from 'usellm';
import './App.css'

function App() {
  const llm = useLLM({
    serviceUrl:'https://usellm.org/api/llm'
  });
  const [result, setResult] = useState('')

  return (
    <div className="container">
      <button
      onClick={async()=>{
        const data = await llm.chat({
          messages:[{role:"user", content:"Dame una lista de procesadores ryzen precio rendimiento solo los procesadores"}],
          stream:true,//Muestra info conforme avanza
          onStream:({message})=>setResult(message.content)
        })
        
      }}
      >
        Info procesador
      </button>
      <div style={{whiteSpace:"pre-wrap"}}>
      {result}
      </div>
    </div>
  )
}

export default App
