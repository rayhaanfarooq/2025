import './global.css'
import { ThemeProvider } from '../components/ui/theme-provider/theme-provider'

export const metadata = {
  title: 'Welcome to portal',
  description: 'Generated by create-nx-workspace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
