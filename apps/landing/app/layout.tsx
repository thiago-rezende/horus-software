import type { Metadata } from 'next'

import { Source_Code_Pro } from 'next/font/google'

import './globals.css'

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HORUS · SOFTWARE',
  description: 'Software Development Made Easy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
