'use client';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const FormSchema = z.object({
  bookerName: z.string(),
  bookerEmail: z.string(),
  checkInDate: z.date(),
  checkOutDate: z.date(),
  guestName: z.string(),
  totalRooms: z.number(),
  roomTypeId: z.string(),
  userId: z.string(),
});

export default function CheckoutForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bookerName: '',
      bookerEmail: '',
      guestName: '',
      totalRooms: 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  };

  return (
    <div className={cn('layout')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn('max-w-md')}>
          <FormField
            control={form.control}
            name='bookerName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bookerEmail'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='guestName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guest Name</FormLabel>
                <FormControl>
                  <Input placeholder='Guest Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='totalRooms'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Rooms</FormLabel>
                <FormControl>
                  <Input placeholder='Total Rooms' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' variant='violet'>Checkout</Button>
        </form>
      </Form>
    </div>
  );
};
