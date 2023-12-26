import { cn } from '@/lib/utils';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import CheckoutForm from '@/components/container/checkout/CheckoutForm';
import CheckoutClientComponent from '@/components/container/checkout/CheckoutClientComponent';

export default function Checkout({ params }: { params: { [key: string]: string | undefined }}) {
  return (
    <CheckoutClientComponent>
      <Navbar />
      <main className={cn('mb-auto')} >
        <CheckoutForm />
      </main>
      <Footer />
    </CheckoutClientComponent>
  );
};
