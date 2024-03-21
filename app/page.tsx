import Image from "next/image";
import ChitChat from "@/app/core/ChitChat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChitChat/>
    </main>
  );
}
