import { Geist } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { AppSidebar } from '@/components/app-sidebar'
import { EnvVarWarning } from '@/components/env-var-warning'
import HeaderAuth from '@/components/header-auth'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
})

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <AppSidebar />
            <div className="flex flex-1 flex-col">
              <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
                <div className="flex w-full max-w-5xl items-center justify-between p-3 px-5 text-sm">
                  <div className="flex items-center gap-5 font-semibold"></div>
                  <div className="flex gap-2">
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                    <ThemeSwitcher />
                  </div>
                </div>
              </nav>
              <main className="mx-auto max-w-5xl flex-1 p-5">{children}</main>
              <footer className="mx-auto flex w-full items-center justify-center gap-8 border-t py-4 text-center text-xs"></footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
