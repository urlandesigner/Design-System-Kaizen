"use client";

import { useEffect } from "react";

const successClass = "copy-inline-button--success";
const errorClass = "copy-inline-button--error";

export function CopyFeedbackProvider() {
  useEffect(() => {
    const resetTimers = new Map<HTMLButtonElement, number>();

    function resetButton(button: HTMLButtonElement) {
      const idleLabel = button.dataset.copyLabel ?? "Copiar";

      button.textContent = idleLabel;
      button.classList.remove(successClass, errorClass);

      const timerId = resetTimers.get(button);
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
        resetTimers.delete(button);
      }
    }

    function showStatus(button: HTMLButtonElement, status: "success" | "error") {
      resetButton(button);

      button.textContent =
        status === "success"
          ? button.dataset.copySuccessLabel ?? "Copiado"
          : button.dataset.copyErrorLabel ?? "Falhou";
      button.classList.add(status === "success" ? successClass : errorClass);

      const timerId = window.setTimeout(() => resetButton(button), 1800);
      resetTimers.set(button, timerId);
    }

    async function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const button = event.target.closest<HTMLButtonElement>("button[data-copy-value]");
      if (!button) return;

      try {
        await navigator.clipboard.writeText(button.dataset.copyValue ?? "");
        showStatus(button, "success");
      } catch {
        showStatus(button, "error");
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      for (const [button, timerId] of resetTimers.entries()) {
        window.clearTimeout(timerId);
        resetButton(button);
      }
    };
  }, []);

  return null;
}
