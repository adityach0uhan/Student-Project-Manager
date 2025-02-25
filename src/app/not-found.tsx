import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

const Error404 = () => {
    return (
        <div className='w-screen flex-col max-h-96 flex items-center justify-center'>
            <Image
                className='mt-10'
                alt='404 Page not found!!! '
                src={'/404duck.svg'}
                width={400}
                height={400}
            />
            <Link href='/'>
                <Button variant={'link'}>
                    <ChevronLeftIcon />
                    Back to Home
                </Button>
            </Link>
        </div>
    );
};

export default Error404;
