import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LeafLine from '../../../../public/images/others/leaf-string.webp';
import Truck from '../../../../public/images/others/truck.webp';
import DrawerItems from './DrawerItems';
import { useAppContext } from '@/app/api/AppContext';
import { IoMdClose } from 'react-icons/io';
import { db } from '@/app/firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

type Props = {
  drawer: boolean;
  setDrawer: (value: boolean) => void;
  email: string;
};

const CartDrawer = ({ drawer, setDrawer, email }: Props) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [freeDeliveryPrice, setFreeDeliveryPrice] = useState<number>(0);
  const cart_drawer = useRef<HTMLElement>(null);
  const { currentUserCart } = useAppContext(); // Access currentUserCart from context

  // Function to handle checkout and save cart data in Firestore
  const handleCheckout = async () => {
    if (!currentUserCart) return; // Ensure currentUserCart is defined
    try {
      await addDoc(collection(db, 'checkouts'), {
        email: email,
        items: currentUserCart.items, // Access items from currentUserCart
        totalPrice: totalPrice,
        createdAt: serverTimestamp(),
      });
      alert('Checkout successful! Your order has been placed.');
      setDrawer(false); // Close the drawer after checkout
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('There was an error with your checkout. Please try again.');
    }
  };

  // Close drawer when clicking outside of it
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!cart_drawer.current?.contains(e.target as Node)) {
        setDrawer(false);
      }
    };

    const pressESC = (e: KeyboardEvent) => {
      if (drawer && e.code === 'Escape') {
        setDrawer(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', pressESC);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', pressESC);
    };
  }, [drawer, setDrawer]);

  // Calculate free delivery price difference
  useEffect(() => {
    setFreeDeliveryPrice(99 - totalPrice);
  }, [setFreeDeliveryPrice, totalPrice, currentUserCart]);

  // Trap the keyboard focus only in the drawer when it's on
  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      if (event.target instanceof Node) {
        if (cart_drawer.current && !cart_drawer.current.contains(event.target)) {
          cart_drawer.current.focus();
        }
      }
    };

    if (drawer) {
      document.addEventListener('focusin', handleFocus);
    }

    return () => {
      document.removeEventListener('focusin', handleFocus);
    };
  }, [drawer]);

  return (
    <motion.aside
      tabIndex={-1}
      key={'cart-drawer'}
      ref={cart_drawer}
      className="fixed right-0 top-0 z-[999] h-full px-12 xs:px-8 pt-12 xs:py-8 pb-6 xs:pb-4 bg-white text-green-2 flex flex-col w-[27rem] xl:min-w-[25rem] xl:w-fit xs:min-w-[20rem] xs:w-full shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'none' }}
    >
      {/* Close button */}
      <button onClick={() => setDrawer(false)} className="hidden xs:block absolute left-4 top-4">
        <IoMdClose />
      </button>
      
      {/* Header */}
      <header className="flex flex-col items-center">
        <h1 className="font-black text-3xl xs:text-2xl mb-8 xs:mb-4 tracking-wider">
          YOUR CART
          {currentUserCart && currentUserCart.items.length > 0 && `(${currentUserCart.items.length})`}
        </h1>
        <p className="font-bold xs:text-sm xs:text-center">
          {freeDeliveryPrice === 99
            ? `You are $${freeDeliveryPrice.toFixed(0)} away from free delivery!`
            : freeDeliveryPrice > 0
            ? `You are $${freeDeliveryPrice.toFixed(2)} away from free delivery!`
            : 'You have earned free delivery!'}
        </p>
        <Image
          src={Truck}
          width={167}
          height={167}
          alt="truck"
          className="w-12 h-12 xs:w-10 xs:h-10"
        />
        <Image
          src={LeafLine}
          width={502}
          height={45}
          alt="leaf line"
          className="w-full h-5"
        />
      </header>

      {/* Separator */}
      <div role="separator" className="flex w-full h-[1px] rounded bg-neutral-100 mt-8 xs:mt-4 mb-4" />

      {/* Items */}
      <DrawerItems
        email={email}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        setDrawer={setDrawer}
      />

      {/* Separator */}
      <div role="separator" className="flex w-full h-[1px] rounded bg-neutral-100 mt-4 xs:mt-4 mb-4" />

      {/* Total Price */}
      <div className="w-full flex flex-col my-4">
        <div className="w-full flex font-black text-xl justify-between tracking-wider xs:text-base">
          <p>SUBTOTAL</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="w-full flex justify-between font-bold text-[0.75rem]">
          <p>Delivery</p>
          <p>Calculated at Checkout</p>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout} // Call handleCheckout on click
        className="w-full flex justify-center rounded-full bg-green-2 active:translate-y-[1px] transition duration-100"
      >
        <p className="font-black text-white tracking-wider text-[0.75rem] p-2">
          CHECKOUT
        </p>
      </button>
    </motion.aside>
  );
};

export default CartDrawer;
