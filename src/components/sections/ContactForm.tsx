"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <FadeIn>
        <Card className="flex flex-col items-center py-12 text-center">
          <CheckCircle className="h-12 w-12 text-success" />
          <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">Message Sent!</h3>
          <p className="mt-2 max-w-sm text-text-secondary">
            Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
          </p>
          <Button className="mt-6" onClick={() => setStatus("idle")}>
            Send Another Message
          </Button>
        </Card>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Input label="Name" name="name" required placeholder="Your name" />
            <Input label="Email" name="email" type="email" required placeholder="you@company.com" />
            <Input label="Company" name="company" placeholder="Company name (optional)" />
            <Input label="Role" name="role" placeholder="Your role (optional)" />
          </div>
          <Textarea
            label="Message"
            name="message"
            required
            placeholder="Tell me about the opportunity or project..."
          />
          {status === "error" && (
            <p className="text-sm text-red-500" role="alert">{error}</p>
          )}
          <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Card>
    </FadeIn>
  );
}
