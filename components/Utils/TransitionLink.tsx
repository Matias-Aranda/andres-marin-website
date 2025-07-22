// components/TransitionLink.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useContext, useState, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { useTransitionContext } from '@/components/Utils/TransitionContext';

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  setLoading?: (loading: boolean) => void;
};

export default function TransitionLink({ href, children, setLoading, className}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const {setTransitioning} = useTransitionContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if(pathname !== href) {
      setTransitioning(true);
  
      setTimeout(() => {
        router.push(href);
      }, 300);
  
      setTimeout(() => {
        setTransitioning(false);
      }, 1600);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }


  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
