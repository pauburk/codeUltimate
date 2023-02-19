import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

export default function App() {

  const translatedCode = useQuery("translateCode");
  const [newCode, setNewCode] = useState("");
  const sendCode = useMutation("sendCode");

  async function handleSendCode(event) {
    event.preventDefault();
    setNewCode("");
    await sendCode(newCode);
  }

  return (
    <main>

      <h1 id="titleBox">Code Universal</h1>
      
      <div class="container">
        
        <form onSubmit={handleSendCode} class="box">
          
          <div class="newCode">
            <input
              value={newCode}
              onChange={event => setNewCode(event.target.value)}
              placeholder="Write some code to translate..."
            />
          </div>
          
          <input type="submit" value="Translate" disabled={!newCode} />
        
        </form>

        <div class="box translatedCode">
          <p>{translatedCode[0].code}</p>
        </div>
      
      </div>
    
    </main>
  );

  // return (   
    // <div class="box translatedCode">
    //   <p>{translatedCode.code}</p>
    // </div>

    // <ul>
    //   {translatedCode.map(message => (
    //     <li key={message._id.toString()}>
    //       <span>{message.code}:</span>
    //     </li>
    //   ))}
    // </ul>
  // );

}
