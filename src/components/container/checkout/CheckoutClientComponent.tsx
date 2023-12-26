'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { blockAccess } from '@/lib/blockAccess';

export default function CheckoutClientComponent({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    blockAccess(['user', 'admin', 'receptionist'], router, '/', '');
  }, []);

  return (
    <>
      {children}
    </>
  );
};
