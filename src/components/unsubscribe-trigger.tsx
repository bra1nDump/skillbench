"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { UnsubscribeModal } from "@/components/unsubscribe-modal";

export function UnsubscribeTrigger() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const email = searchParams.get("email") ?? "";
  const token = searchParams.get("token") ?? "";
  const isUnsubscribe = searchParams.get("unsubscribe") === "1";

  useEffect(() => {
    if (isUnsubscribe && email && token) {
      setShow(true);
    }
  }, [isUnsubscribe, email, token]);

  const handleClose = useCallback(() => {
    setShow(false);
    // Clean URL
    router.replace("/changelog", { scroll: false });
  }, [router]);

  if (!show) return null;

  return <UnsubscribeModal email={email} token={token} onClose={handleClose} />;
}
