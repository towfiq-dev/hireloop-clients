'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import { Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const {email, password} = data
    const { data:res, error } = await authClient.signIn.email({
      email: email, 
      password: password,
      callbackURL: "/"
  });
  
    if (res) {
      toast.success('You are successfully Signup')
    }else if (error){
      toast.error('Something went wrong')
    }
    }

const googleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <div className="min-h-screen mt-25 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-[620px]">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-10 text-center">
            <h2 className="text-4xl font-bold text-white">Welcome Back</h2>
            <p className="text-cyan-50 mt-3 text-sm md:text-base">
              Login to continue your amazing journey with us.
            </p>
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-12">
            <form className="space-y-5" 
            onSubmit={handleSubmit(onSubmit)}
            >
              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={'w-full bg-gray-50 border rounded-2xl py-4 pl-12 pr-4 outline-none transition-all focus:ring-4'}
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    // {...register('password', {
                    //   required: 'Password is required',
                    //   minLength: {
                    //     value: 6,
                    //     message: 'Password must be at least 6 characters long.',
                    //   },
                    //   validate: {
                    //     hasUppercase: (value) =>
                    //       /[A-Z]/.test(value) ||
                    //       'Password must contain at least one uppercase letter.',
                    //     hasLowercase: (value) =>
                    //       /[a-z]/.test(value) ||
                    //       'Password must contain at least one lowercase letter.',
                    //     hasNumber: (value) =>
                    //       /[0-9]/.test(value) ||
                    //       'Password must contain at least one number.',
                    //   },
                    // })}
                    className={'w-full bg-gray-50 border rounded-2xl py-4 pl-12 pr-12 outline-none transition-all focus:ring-4'}
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-cyan-500 transition"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </span>
                </div>
                {errors.password && <span className='text-red-500'>This field is required</span>}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-cyan-500 cursor-pointer"
                  />
                  Remember Me
                </label>

                <Link
                  href="/auth/forgetPassword"
                  className="text-sm font-medium text-cyan-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.01] hover:shadow-cyan-200 transition-all cursor-pointer"
              >
                Sign In
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            {/* Google Button */}
            <button 
              onClick={googleSignIn}
              className="w-full border border-gray-200 bg-white hover:bg-gray-50 py-4 rounded-2xl flex items-center justify-center gap-3 text-[17px] font-semibold text-gray-700 transition-all cursor-pointer"
            >
              <GrGoogle className="text-xl" />
              Sign In With Google
            </button>

            {/* Footer */}
            <p className="text-center mt-8 text-gray-600 text-sm md:text-base">
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/signup"
                className="font-semibold text-cyan-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;