// components/TransitionLink.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  setLoading?: (loading: boolean) => void;
};

export default function TransitionLink({ href, children, setLoading, className}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if(pathname !== href) {
      setLoading && setLoading(true)
  
      setTimeout(() => {
        router.push(href);
      }, 300);
  
      setTimeout(() => {
        setLoading && setLoading(false);
      }, 1600);
    }


  };

  console.log(pathname, href)

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
