'use client';

import React, { FC } from 'react';
import Button from '@/ui/Button';
import { signIn, signOut } from 'next-auth/react';

interface IProps {}

const SignOutButton: FC<IProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const signUserOut = async () => {
        setIsLoading(true);
        try {
            await signOut();
        } catch (error) {
            toast({
                title: 'Error signing out',
                message: 'Please try again later',
                type: 'error',
            });
        }
    };
    return (
        <Button
            onClick={signUserOut}
            isLoading={isLoading}
        >
            Sign Out
        </Button>
    );
};

export default SignOutButton;
