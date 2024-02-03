import Image from 'next/image';
import LoginModule from './components/LoginModule/LoginModule';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <LoginModule />
      <Image
        className='-z-10 bg-center bg-cover opacity-80'
        src='/purple_sky_with_stars_bg_1920.webp'
        alt='Login background image'
        fill={true}
      />
    </main>
  );
}
