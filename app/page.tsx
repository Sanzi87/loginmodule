import Image from 'next/image';
import LoginModule from './components/LoginModule/LoginModule';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <LoginModule />
    </main>
  );
}
