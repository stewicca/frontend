'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useTokenContext } from '@/app/token-provider';
import { Button, buttonVariants } from '../../ui/button';

export default function MainNav() {
  const { token, setToken } = useTokenContext();
  const { toast } = useToast();
  const router = useRouter();

  function onClick() {
    localStorage.removeItem('token');
    setToken('');
    toast({
      description: 'Logout successful.',
      variant: 'violet',
    });
    router.push('/');
  };

  return (
    <>
      { token === '' ? (
        <nav className={cn('flex items-center gap-4')}>
          <Link href='/login' className={cn('font-medium')}>Login</Link>
          <Link href='/register' className={cn(buttonVariants({ variant: 'violet', size: 'sm' }))}>Register</Link>
        </nav>
      ) : (
        <nav className={cn('flex items-center gap-4')}>
          <Link href='/' className={cn('font-medium')}>My Account</Link>
          <Button variant='violet' size='sm' onClick={onClick}>Logout</Button>
        </nav>
      )}
    </>
  );
};
