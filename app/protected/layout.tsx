import { AppSidebar } from '@/components/app-sidebar'
import { EnvVarWarning } from '@/components/env-var-warning'
import HeaderAuth from '@/components/header-auth'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
          <div className="flex w-full items-center justify-between p-3 px-5 text-sm">
            <div className="flex items-center gap-5 font-semibold"></div>
            <div className="flex gap-2">
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-5xl flex-1 p-5">{children}</main>
        <footer className="mx-auto flex w-full items-center justify-center gap-8 border-t py-4 text-center text-xs">
          <p>
            Powered by{' '}
            <a
              href="https://www.linkedin.com/in/eriquyjhordan/?editlocale=en_us"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Eriquy Jhordan
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
