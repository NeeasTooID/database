// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js Website</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}
