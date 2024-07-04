import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [state, setState] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    console.log("JavaScript loaded");
    console.log("app.js loaded");
  }, []);

  const toggleState = () => {
    setState(!state);
    console.log("Toggle state:", !state);
  };

  const handleSend = () => {
    if (inputText.trim() === "") {
      return;
    }

    const userMessage = { name: "User", message: inputText.trim() };
    setMessages([...messages, userMessage]);

    fetch("/predict", {
      method: "POST",
      body: JSON.stringify({ message: inputText.trim() }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const botMessage = { name: "Jarvis", message: data.answer };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setInputText("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setInputText("");
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="container">
      <div className="chatbox">
        <div className={`chatbox__support ${state ? "chatbox--active" : ""}`}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img
                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                alt=""
              />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">
                Hi. My name is Jarvis. How can I help you?
              </p>
            </div>
          </div>
          <div className="chatbox__messages">
            {messages
              .slice()
              .reverse()
              .map((item, index) => (
                <div
                  key={index}
                  className={`messages__item ${
                    item.name === "Jarvis"
                      ? "messages__item--visitor"
                      : "messages__item--operator"
                  }`}
                >
                  {item.message}
                </div>
              ))}
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              className="chatbox__input"
              placeholder="Write a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyUp={handleKeyPress}
            />
            <button
              className="chatbox__send--footer send__button"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={toggleState}>
            <svg
              width="36"
              height="29"
              viewBox="0 0 36 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.77679 21.0781 2.9933 21.9621C2.77232 22.2232 2.51116 22.4643 2.59152 22.846C2.65179 23.1875 2.93304 23.4286 3.23438 23.4286C3.25446 23.4286 3.27455 23.4286 3.29464 23.4286C3.89732 23.3482 4.47991 23.2478 5.02232 23.1071C7.05134 22.5848 8.93973 21.721 10.6071 20.5357C11.7321 20.7366 12.9174 20.8571 14.1429 20.8571C21.9576 20.8571 28.2857 16.2567 28.2857 10.5714ZM36 15.7143C36 12.3594 33.7902 9.38616 30.3951 7.51786C30.6964 8.50223 30.8571 9.52679 30.8571 10.5714C30.8571 14.1674 29.0089 17.4821 25.654 19.933C22.5402 22.183 18.4621 23.4286 14.1429 23.4286C13.5603 23.4286 12.9576 23.3884 12.375 23.3482C14.8862 24.9955 18.221 26 21.8571 26C23.0826 26 24.2679 25.8795 25.3929 25.6786C27.0603 26.8638 28.9487 27.7277 30.9777 28.25C31.5201 28.3906 32.1027 28.4911 32.7054 28.5714C33.0268 28.6116 33.3281 28.3504 33.4085 27.9888C33.4888 27.6071 33.2277 27.3661 33.0067 27.1049C32.2232 26.221 31.3393 25.4375 30.6563 23.7701C33.9107 21.8817 36 18.9888 36 15.7143Z"
                fill="#581B98"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
