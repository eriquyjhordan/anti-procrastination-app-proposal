import Link from 'next/link'

import { EnvVarWarning } from '@/components/env-var-warning'
import HeaderAuth from '@/components/header-auth'
import Hero from '@/components/hero'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-full flex-1 flex-col items-center gap-20">
        <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
          <div className="flex w-full max-w-5xl items-center justify-between p-3 px-5 text-sm">
            <div className="flex items-center gap-5 font-semibold">
              <Link href={'/'}>Task Manager</Link>
              <div className="flex items-center gap-2"></div>
            </div>
            <div className="flex gap-2">
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
        <div className="flex max-w-5xl flex-col gap-20 p-5">
          <Hero />
        </div>
      </div>
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
    </main>
  )
}
