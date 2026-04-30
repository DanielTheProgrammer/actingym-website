import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ActinGym - Director-level self-tape feedback',
  description:
    'ActinGym analyzes actor self-tapes and turns them into director-level feedback, score cards, and focused training exercises.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
