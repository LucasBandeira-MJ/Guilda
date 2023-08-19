import './globals.sass'

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Welcome to Guilda!',
  description: 'Come in and sit by the fire, warm yourself, and whenever you feel ready, embark on a new quest!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
