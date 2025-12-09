"use client";
import React from "react";
import { Lock } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <form className="min-w-7xl mx-auto sm:mt-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            id="fullname"
            placeholder="Your Name"
            type="text"
            disabled
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            disabled
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">Your Message</Label>
        <Textarea
          placeholder="Tell me about your project..."
          id="content"
          disabled
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          All messages are secure and encrypted.
        </p>
      </div>

      {/* Coming Soon Message */}
      <div className="relative w-full mb-6 p-6 rounded-lg border-2 border-dashed border-blue-400/30 bg-gradient-to-br from-blue-50/10 via-purple-50/10 to-pink-50/10 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3">
          <Lock className="w-5 h-5 text-blue-500" />
          <div className="text-center">
            <p className="font-semibold text-base bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Coming Soon
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Message functionality will be available shortly
            </p>
          </div>
        </div>
      </div>

      <Button
        disabled
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] opacity-50 cursor-not-allowed"
        type="submit"
      >
        <div className="flex items-center justify-center">
          Send Message (Coming Soon)
        </div>
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent to-transparent" />
    </>
  );
};
