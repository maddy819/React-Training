import Link from "next/link";
import Header from "@/components/header";

export default function About() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get read about us! 🔥</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
