import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import '@/styles/globals.css'
import { Provider } from '@/app/provider';

const inter = Noto_Sans_Thai({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reada-loo',
  description: 'เว็บอ่านนิยายชื่อดังก้องกังวาลในกระเพาะ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='light'>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}


