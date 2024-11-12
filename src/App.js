import { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [displayedEmails, setDisplayedEmails] = useState([]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleButtonClick = () => {
    if (email) {
      setDisplayedEmails([...displayedEmails, email]);
      setEmail("");
    }
  };

  return (
    <div className="App">
      <h1>Enter your Email</h1>
      <input
        type="email"
        placeholder="Write your email here"
        value={email}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Send</button>

      {displayedEmails.length > 0 && (
        <div>
          <h2>Emails Entered:</h2>
          <ul>
            {displayedEmails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
