import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Bubbly',
  description: 'This project provides a tool to simulate text bubbles on a green background, which can be used as a visual effect (VFX) for videos. It allows you to customize the background color of the text and the width of the text bubbles.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
