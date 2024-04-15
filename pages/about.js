// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const navigateToHomePage = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>About Us</h1>
      <button onClick={navigateToHomePage}>Go back to Home</button>
    </div>
  );
}
