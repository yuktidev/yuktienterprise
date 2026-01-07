import { useState } from "react";
import "./ChatBot.css";

type Message = {
	sender: "user" | "bot";
	text: string;
};

const suggestedQuestions = [
	"What services do you offer?",
	"How much does a website cost?",
	"How can I contact you?",
];

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isBotTyping, setIsBotTyping] = useState(false);


	const [messages, setMessages] = useState<Message[]>([
		{
			sender: "bot",
			text: "Hi 👋 I’m YuktiBot. How can I help you today?",
		},
	]);

	const [input, setInput] = useState("");

	const getBotResponse = (text: string) => {
		const lower = text.toLowerCase();

		if (lower.includes("service"))
			return "We offer Web Apps, SaaS platforms, APIs, and custom solutions.";
		if (lower.includes("cost") || lower.includes("price"))
			return "Pricing depends on scope. Please share your requirement 🙂";
		if (lower.includes("contact"))
			return "You can contact us via Email, WhatsApp, or the Contact section.";
		return "Thanks for your message! Our team will get back to you shortly.";
	};

	const sendMessage = (text?: string) => {
		const messageText = text ?? input;
		if (!messageText.trim()) return;

		// 1. Add user message immediately
		const userMsg: Message = { sender: "user", text: messageText };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");

		// 2. Show bot typing loader
		setIsBotTyping(true);

		// 3. Simulate API delay (3 seconds)
		setTimeout(() => {
			const botMsg: Message = {
				sender: "bot",
				text: getBotResponse(messageText),
			};

			setMessages((prev) => [...prev, botMsg]);
			setIsBotTyping(false);
		}, 3000);
	};


	return (
		<>
			{/* FLOATING CHAT ICON */}
			<button
				className="chatbot-toggle"
				onClick={() => setIsOpen(true)}
				aria-label="Open chat"
			>
				💬
			</button>

			{/* CHAT POPUP */}
			{isOpen && (
				<div className="chatbot-popup">
					{/* Header */}
					<div className="chatbot-header">
						<span>YuktiBot</span>
						<button onClick={() => setIsOpen(false)}>✕</button>
					</div>

					{/* Messages */}
					<div className="chatbot-messages">
						{messages.map((msg, i) => (
							<div key={i} className={`chatbot-message ${msg.sender}`}>
								{msg.text}
							</div>
						))}

						{/* Bot typing loader */}
						{isBotTyping && (
							<div className="chatbot-message bot typing">
								<span className="typing-dot">•</span>
								<span className="typing-dot">•</span>
								<span className="typing-dot">•</span>
							</div>
						)}

						{/* Suggested questions */}
						<div className="chatbot-suggestions">
							{!isBotTyping && suggestedQuestions.map((q, i) => (
								<button
									key={i}
									onClick={() => sendMessage(q)}
									className="suggestion-chip"
								>
									{q}
								</button>
							))}
						</div>
					</div>

					{/* Input */}
					<div className="chatbot-input">
						<input
							type="text"
							placeholder="Type your message..."
							className="
				w-full
				px-3 py-2
				rounded-md
				bg-white
				text-gray-900
				caret-indigo-600
				placeholder-gray-400
				border border-gray-300
				focus:outline-none
				focus:ring-2 focus:ring-indigo-500
				focus:border-indigo-500
			"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && sendMessage()}
						/>
						<button onClick={() => sendMessage()}>Send</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ChatBot;
