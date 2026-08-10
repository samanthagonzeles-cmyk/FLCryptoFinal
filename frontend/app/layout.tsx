import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FL-Crypto | Federated Learning with Cryptographic Verification',
  description: 'Secure federated learning platform combining privacy-preserving distributed training with cryptographic verification.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
