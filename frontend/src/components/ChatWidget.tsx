import { useState } from "react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, "You: " + input];
    setMessages(newMessages);

    const res = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages([...newMessages, "AI: " + data.reply]);
    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#E2B770] text-black px-4 py-3 rounded-full shadow-lg"
      >
        💬 Chat
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-xl rounded-xl p-4">
          <h3 className="font-bold mb-2">KIIN AI Assistant</h3>

          <div className="h-52 overflow-y-auto border p-2 mb-2">
            {messages.map((m, i) => (
              <p key={i}>{m}</p>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              className="border w-full p-2 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />

            <button
              onClick={sendMessage}
              className="bg-[#0f172a] text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;