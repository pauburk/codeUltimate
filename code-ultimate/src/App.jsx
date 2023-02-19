import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

export default function App() {

  const translatedCode = useQuery("translateCode");
  const [newCode, setNewCode] = useState("");
  const sendCode = useMutation("sendCode");

  async function handleSendCode(event) {
    event.preventDefault();
    // setNewCode("");
    await sendCode(encodeURI(newCode));
  }

  function handleTabCharacter(e) {
    if (e.key == "Tab") {
      e.preventDefault();
      let start = e.target.selectionStart;
      let val = e.target.value;
      e.target.value = val.substr(0, start) + "    " + val.substr(e.target.selectionEnd);
      e.target.selectionStart = e.target.selectionEnd = start + 4;
    }
  }

  return (
    <main>

      <h1 id="titleBox">CodeUniversal</h1>

      <p id="note">*At the moment, this translation software only supports English to Spanish. More languages coming soon!</p>
      
      <div class="container">
        
        <form onSubmit={handleSendCode} class="box">
          
          <div class="newCode" id="newCodeBox">
            <textarea
              value={newCode}
              onChange={event => setNewCode(event.target.value)}
              placeholder="Write some code to translate..."
              onKeyDown={handleTabCharacter}
              tabIndex="0"
            ></textarea>
          </div>
          
          <input type="submit" value="Translate" disabled={!newCode} />
          <input type="reset" value="Clear" />
          <button>Options</button>
        
        </form>

        <div class="box">
          <div class="translatedCode">
            <p placeholder="Translation">{decodeURI(translatedCode[0].code)}</p>
          </div>
        </div>
      
      </div>
    
    </main>
  );
}


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Sample Home Page</title>
// </head>
// <body>
// <! -- Calls a function on the page load. -- >
// <element onload="myfunction_onload">
// <button type="submit" onclick='myfunction_clickevent()'>Run my Python!</button>
// <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
// <! -- This script runs the python script on the page load -->
// <script>
//     function myfunction_onload(){
//         $.ajax({
//             url: "app.py",
//              context: document.body
//             })
//         }
//     </script>
// <! -- This script runs the python script when the button is clicked -->
// <script>
//     function myfunction_clickevent(){
//         $.ajax({
//             url:"/test",
//             context: document.body});}
// </script>