// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const navigateToAboutPage = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Welcome to My Next.js Website</h1>
      <button onClick={navigateToAboutPage}>Go to About Us</button>
    </div>
  );
}
