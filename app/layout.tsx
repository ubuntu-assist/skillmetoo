import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Skillmetoo - Former. Informer. Transformer.',
  description:
    'Association africaine qui motive et transforme la jeunesse en leur donnant des compétences pour comprendre le monde et saisir les opportunités du marché international.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body className={`${raleway.variable} font-sans`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
