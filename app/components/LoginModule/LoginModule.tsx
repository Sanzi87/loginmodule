import Link from 'next/link';
import styles from './LoginModule.module.css';

const LoginModule = () => {
  return (
    <div className='relative overflow-hidden w-full max-w-96 flex justify-center align-middle shadow-lg'>
      <div className={styles.formContainer}>
        <form
          action=''
          className='flex flex-col absolute z-10 bg-slate-700 p-6 inset-0 5'
          noValidate
        >
          <h2 className='font-bold text-2xl text-center text-violet-400'></h2>
          <div className={styles.inputBox}>
            <input
              type='text'
              required
              className='relative w-full pt-5 px-5 pb-2 bg-transparent border-none outline-none z-10 text-gray-700'
            />
            <span className='absolute left-0 pt-5 px-0 pb-2 text-base text-gray-400 pointer-events-none duration-500'>
              Username
            </span>
            <i className='absolute bottom-0 left-0 h-0.5 w-full bg-violet-400 rounded-full duration-500 z-9 pointer-events-none'></i>
          </div>
          <div className={styles.inputBox}>
            <input
              type='password'
              required
              className='relative w-full pt-5 px-5 pb-2 bg-transparent border-none outline-none z-10 text-gray-700'
            />
            <span className='absolute left-0 pt-5 px-0 pb-2 text-base text-gray-400 pointer-events-none duration-500'>
              Password
            </span>
            <i className='absolute bottom-0 left-0 h-0.5 w-full bg-violet-400 rounded-full duration-500 z-9 pointer-events-none'></i>
          </div>
          <div className='flex justify-between mt-3'>
            <Link
              className='text-gray-400 hover:text-violet-300 text-xs'
              href={'#'}
            >
              Forgot Password
            </Link>
            <Link
              className='text-gray-400 hover:text-violet-300 text-xs'
              href={'#'}
            >
              Sign up
            </Link>
          </div>
          <button className='submitButton bg-violet-400 text-gray-700 active:bg-violet-300 border-none pz-3 py-3 w-full mt-3 rounded-full font-bold cursor-pointer'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModule;
