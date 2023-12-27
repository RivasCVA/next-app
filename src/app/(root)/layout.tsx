import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@app/globals.css';

type Props = {
    children: ReactNode;
};

const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-primary',
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout: FC<Props> = (props) => {
    const { children } = props;
    return (
        <html lang="en" className={poppins.variable}>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
