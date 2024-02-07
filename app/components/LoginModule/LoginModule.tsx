'use client';
import Link from 'next/link';
import Spinner from './Spinner';
import ErrorMessage from '../ErrorMessage';
import styles from './LoginModule.module.css';
import { useState } from 'react';
import { loginSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import delay from 'delay';

type LoginFormData = z.infer<typeof loginSchema>;

const LoginModule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async () => {
    try {
      setSubmitting(true);
      await delay(2000);
      console.log('You have logged in successfully!');
      alert('You have logged in successfully!');
      setSubmitting(false);
      reset();
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred!');
      console.log(error);
    }
  });

  return (
    <div className='relative overflow-hidden w-full max-w-96 flex justify-center align-middle shadow-xl'>
      <div className={styles.formContainer}>
        <form
          action=''
          onSubmit={onSubmit}
          className='flex flex-col absolute z-10 bg-slate-700 p-6 inset-0.5'
          noValidate
        >
          <h2 className='font-bold text-2xl text-center text-violet-400'>
            Login
          </h2>
          <div className={styles.inputBox}>
            <input
              type='text'
              {...register('username')}
              required
              className='relative w-full pt-5 px-5 pb-2 bg-transparent border-none outline-none z-10 text-gray-700'
              autoComplete='off'
            />
            <span className='absolute left-0 pt-5 px-0 pb-2 text-base text-gray-400 pointer-events-none duration-500'>
              Username
            </span>
            <i className='absolute bottom-0 left-0 h-0.5 w-full bg-violet-400 rounded-full duration-500 z-9 pointer-events-none'></i>
          </div>
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
          <div className={styles.inputBox}>
            <input
              type='password'
              {...register('password')}
              required
              className='relative w-full pt-5 px-5 pb-2 bg-transparent border-none outline-none z-10 text-gray-700'
            />
            <span className='absolute left-0 pt-5 px-0 pb-2 text-base text-gray-400 pointer-events-none duration-500'>
              Password
            </span>
            <i className='absolute bottom-0 left-0 h-0.5 w-full bg-violet-400 rounded-full duration-500 z-9 pointer-events-none'></i>
          </div>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
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
          <button
            disabled={isSubmitting}
            className='submitButton bg-violet-400 text-gray-700 active:bg-violet-300 border-none p-3 w-full mt-3 rounded-full font-bold cursor-pointer'
          >
            {isSubmitting ? <Spinner /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModule;
