"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Message = {
  user: string;
  ai: string;
};

const demoResponse = "This is a demo AI response.";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { user: userMessage, ai: demoResponse },
    ]);
    setInput("");
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-81px)] max-w-4xl flex-col px-6 py-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          AI Chat
        </p>
        <h1 className="mt-4 text-4xl font-black sm:text-5xl">Chat with AI</h1>
        <p className="mt-4 text-lg leading-8 text-slate-400">
          Send a message to see a demo AI response.
        </p>
      </div>

      <section
        className="mt-10 flex min-h-80 flex-1 flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-5 sm:p-7"
        aria-label="Chat messages"
      >
        <div className="flex-1 space-y-5" aria-live="polite">
          {messages.length === 0 ? (
            <p className="text-slate-500">Your conversation will appear here.</p>
          ) : (
            messages.map((message, index) => (
              <article
                key={`${message.user}-${index}`}
                className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <p className="text-slate-200">
                  <span className="font-bold text-cyan-300">User:</span>{" "}
                  {message.user}
                </p>
                <p className="text-slate-300">
                  <span className="font-bold text-violet-300">AI:</span>{" "}
                  {message.ai}
                </p>
              </article>
            ))
          )}
        </div>

        <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <label htmlFor="chat-message" className="sr-only">
            Chat message
          </label>
          <input
            id="chat-message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type your message..."
            className="min-w-0 flex-1 rounded-full border border-white/15 bg-slate-950 px-5 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
          />
          <button
            type="submit"
            className="rounded-full bg-cyan-300 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
