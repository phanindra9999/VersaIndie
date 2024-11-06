'use client'
import { signIn } from 'next-auth/react';
import GoogleIcon from '../../../../public/images/login/google.png';
import GithubIcon from '../../../../public/images/login/giticon.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useAppContext } from '@/app/api/AppContext';
import KeyIcon from './KeyIcon';
import { useScrollBlock } from '@/app/hooks/useScrollBlock';

type Props = {};

const LoginPopUp = ({}: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { loginPopUp, setLoginPopUp } = useAppContext();
  const [blockScroll, allowScroll] = useScrollBlock();

  // Close popup when clicking outside or pressing ESC
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setLoginPopUp(false);
      }
    };

    const pressESC = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setLoginPopUp(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', pressESC);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', pressESC);
    };
  }, [setLoginPopUp]);

  useEffect(() => {
    if (loginPopUp) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [loginPopUp, blockScroll, allowScroll]);

  // Trap keyboard focus only in the popup when it's on
  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      if (event.target instanceof Node) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          menuRef.current.focus();
        }
      }
    };

    if (loginPopUp) {
      document.addEventListener('focusin', handleFocus);
    }

    return () => {
      document.removeEventListener('focusin', handleFocus);
    };
  }, [loginPopUp]);

  return (
    <section
      role="dialog"
      aria-modal="true"
      className={`fixed z-[60] inset-0 w-full h-full bg-black/40 flex items-center justify-center transition-opacity overflow-y-auto ${
        loginPopUp ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        tabIndex={-1}
        ref={menuRef}
        className="p-6 rounded-xl border border-neutral-600 bg-[#1E293B] shadow-2xl text-neutral-100 max-w-lg w-full max-h-[90vh] overflow-y-auto scrollbar-hide transform transition-all duration-300 ease-in-out"
      >
        <div className="flex flex-col items-center gap-4">
          <KeyIcon />
          <h2 className="text-xl font-semibold text-center text-white">Welcome Back to VersaIndie!</h2>
          <p className="text-sm text-neutral-400 text-center">Sign in to access your account</p>

          {/* Divider */}
          <div className="w-full flex items-center gap-3 mt-4">
            <div className="flex-1 h-[1px] bg-neutral-500"></div>
            <p className="text-xs text-neutral-400">or sign in with</p>
            <div className="flex-1 h-[1px] bg-neutral-500"></div>
          </div>

          {/* Social Sign In Buttons - side by side */}
          <div className="flex space-x-3 w-full mt-3">
            <button
              onClick={() => signIn('google')}
              className="flex items-center w-1/2 p-2 bg-white text-gray-500 rounded-lg shadow hover:bg-gray-700 active:scale-95 transform transition duration-150"
            >
              <Image src={GoogleIcon} alt="Google icon" width={24} height={24} className="mr-3" />
              <span className="flex-grow text-center font-medium">Google</span>
            </button>
            <button
              onClick={() => signIn('github')}
              className="flex items-center w-1/2 p-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-600 active:scale-95 transform transition duration-150"
            >
              <Image src={GithubIcon} alt="GitHub icon" width={24} height={24} className="mr-3" />
              <span className="flex-grow text-center font-medium">GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPopUp;
