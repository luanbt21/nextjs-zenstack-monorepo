"use client";

import { Button } from "@repo/ui/components/ui/button";
import { User } from "@repo/db";

export default function UserAction({ user }: { user: User }) {
  const action = (name: string) => {
    alert(`Hello ${name}`);
  };
  return (
    <>
      <Button onClick={() => action(user.name || "Anonymous")}>Click me</Button>
    </>
  );
}
