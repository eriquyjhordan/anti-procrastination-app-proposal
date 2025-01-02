import Link from 'next/link'

import { EnvVarWarning } from '@/components/env-var-warning'
import HeaderAuth from '@/components/header-auth'
import Hero from '@/components/hero'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-full flex-1 flex-col items-center gap-8">
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
        <div className="flex max-w-5xl flex-col gap-8 px-5">
          <Hero />
          <div className="mx-auto my-4 max-w-4xl rounded-lg p-6">
            <h1 className="mb-4 text-2xl font-bold text-foreground">
              Showcasing Expertise and Passion
            </h1>
            <p className="mb-4 text-foreground/90">
              I created this simple application to showcase my expertise and
              passion for developing innovative and user-friendly applications.
              Although I am new to the freelancing world and currently building
              my portfolio, I bring significant professional experience as a
              Full Stack Developer. My expertise includes working with
              technologies such as{' '}
              <span className="font-medium text-gray-900">
                Firebase, Next.js, TypeScript, and React
              </span>
              , alongside a strong foundation in UI/UX design.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              Professional Experience
            </h2>
            <p className="mb-4 text-foreground/90">
              Previously, I’ve successfully developed and migrated projects for
              companies like Ford Motor Company, where I transitioned a legacy
              React application to Next.js, improving performance through
              SSR/SSG and micro-frontends. I also have a proven track record of
              quickly learning and adapting to new technologies, as demonstrated
              during my Next.js migration work.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              Educational Background
            </h2>
            <p className="mb-4 text-foreground/90">
              My education in Computer Engineering at{' '}
              <span className="font-medium text-gray-900">UFES</span> and
              consistent hands-on experience with my tech stack over the past
              four years position me as a strong candidate to deliver robust,
              lightweight applications tailored to user needs.
            </p>
          </div>
        </div>
      </div>
      <footer className="mx-auto flex w-full items-center justify-center gap-8 border-t py-4 text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://www.upwork.com/freelancers/~0115e156929a7b471a?mp_source=share"
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
