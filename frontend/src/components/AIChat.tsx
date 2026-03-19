import { useState, useEffect, useRef } from "react";

const AIChat = () => {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "ai" }[]
  >([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { text: input, sender: "user" },
    ];
    setMessages(newMessages);
    setInput("");

    // 🔧 TEMP: Fake AI response (until backend is ready)
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          text: "Hello 👋 I’m KIIN AI. Backend is not connected yet, but I’ll be ready soon!",
          sender: "ai",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#0f172a] text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        🤖
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#0f172a] text-white p-3 font-semibold flex justify-between items-center">
            KIIN Assistant
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="h-64 p-3 overflow-y-auto space-y-2 text-sm bg-gray-50">
            {messages.length === 0 && (
              <p className="text-gray-400 text-center mt-10">
                Start a conversation...
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-[#0f172a] text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded-lg px-2 py-1 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="bg-[#0f172a] text-white px-3 rounded-lg"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;