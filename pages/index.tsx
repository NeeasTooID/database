// pages/index.tsx

import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/about'); // Mengarahkan ke halaman '/about'
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Go to About Page</button>
    </div>
  );
};

export default HomePage;
