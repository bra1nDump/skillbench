"use client";

import { useCallback, useEffect, useState } from "react";

export function UnsubscribeModal({
  email,
  token,
  onClose,
}: {
  email: string;
  token: string;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"confirm" | "loading" | "done" | "resubscribed" | "error">("confirm");
  const [errorMsg, setErrorMsg] = useState("");

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleUnsubscribe = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
    }
  }, [email, token]);

  const handleResubscribe = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("resubscribed");
      } else {
        setStatus("error");
        setErrorMsg("Could not re-subscribe. Try again later.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
    }
  }, [email]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mx-4 w-full max-w-md rounded-lg border border-[#333] bg-[#0a0a0a] p-8 shadow-2xl">
        {status === "confirm" && (
          <>
            <h2 className="text-lg font-bold text-white">Unsubscribe</h2>
            <p className="mt-2 text-[13px] text-[#a3a3a3]">
              Are you sure you want to unsubscribe{" "}
              <span className="font-mono text-white">{email}</span> from
              changelog notifications?
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleUnsubscribe}
                className="cursor-pointer bg-red-600 px-4 py-2 font-mono text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-red-700"
              >
                UNSUBSCRIBE
              </button>
              <button
                onClick={onClose}
                className="cursor-pointer border border-[#333] px-4 py-2 font-mono text-[12px] font-bold tracking-wider text-[#a3a3a3] transition-colors hover:border-[#525252] hover:text-white"
              >
                CANCEL
              </button>
            </div>
          </>
        )}

        {status === "loading" && (
          <p className="font-mono text-[13px] text-[#a3a3a3]">Unsubscribing...</p>
        )}

        {status === "done" && (
          <>
            <h2 className="text-lg font-bold text-white">Unsubscribed</h2>
            <p className="mt-2 text-[13px] text-[#a3a3a3]">
              <span className="font-mono text-white">{email}</span> has been
              removed. You won't receive any more emails.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleResubscribe}
                className="cursor-pointer bg-[var(--accent)] px-4 py-2 font-mono text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-[var(--accent)]/80"
              >
                RE-SUBSCRIBE
              </button>
              <button
                onClick={onClose}
                className="cursor-pointer border border-[#333] px-4 py-2 font-mono text-[12px] font-bold tracking-wider text-[#a3a3a3] transition-colors hover:border-[#525252] hover:text-white"
              >
                CLOSE
              </button>
            </div>
          </>
        )}

        {status === "resubscribed" && (
          <>
            <h2 className="text-lg font-bold text-emerald-400">Welcome back!</h2>
            <p className="mt-2 text-[13px] text-[#a3a3a3]">
              <span className="font-mono text-white">{email}</span> is subscribed
              again. You'll get notified on major changes.
            </p>
            <button
              onClick={onClose}
              className="mt-6 cursor-pointer border border-[#333] px-4 py-2 font-mono text-[12px] font-bold tracking-wider text-[#a3a3a3] transition-colors hover:border-[#525252] hover:text-white"
            >
              CLOSE
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-lg font-bold text-red-400">Error</h2>
            <p className="mt-2 text-[13px] text-[#a3a3a3]">{errorMsg}</p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleUnsubscribe}
                className="cursor-pointer bg-red-600 px-4 py-2 font-mono text-[12px] font-bold tracking-wider text-white transition-colors hover:bg-red-700"
              >
                RETRY
              </button>
              <button
                onClick={onClose}
                className="cursor-pointer border border-[#333] px-4 py-2 font-mono text-[12px] font-bold tracking-wider text-[#a3a3a3] transition-colors hover:border-[#525252] hover:text-white"
              >
                CLOSE
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
