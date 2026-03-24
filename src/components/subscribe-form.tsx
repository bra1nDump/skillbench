"use client";

import { useState } from "react";

import { trackSubscribe } from "./posthog-provider";

export function SubscribeForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Subscribed! You'll get notified on major leaderboard shifts.");
        trackSubscribe(email);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  };

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <p className={`font-mono text-[12px] ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-56 border px-3 py-2 font-mono text-[12px] focus:outline-none ${
          isDark
            ? "border-[#333] bg-[#0a0a0a] text-white placeholder:text-[#525252] focus:border-[var(--accent)]"
            : "border-[var(--border)] bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-900"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`cursor-pointer px-4 py-2 font-mono text-[11px] font-bold tracking-wider transition-colors ${
          isDark
            ? "bg-[var(--accent)] text-white hover:bg-[var(--accent)]/80"
            : "bg-gray-900 text-white hover:bg-gray-700"
        } ${status === "loading" ? "opacity-50" : ""}`}
      >
        {status === "loading" ? "..." : "SUBSCRIBE"}
      </button>
      {status === "error" && (
        <span className="font-mono text-[11px] text-red-400">{message}</span>
      )}
    </form>
  );
}
