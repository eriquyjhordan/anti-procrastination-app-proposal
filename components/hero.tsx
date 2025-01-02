import Image from 'next/image'
import Link from 'next/link'

import DarkApplication from '../public/task_manager_dark.png'
import LightApplication from '../public/task_manager_light.png'
import { Button } from './ui/button'
import { Cover } from './ui/cover'

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="relative z-20 mx-auto mt-4 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text  text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-4xl lg:text-6xl">
        <Cover>Deploy</Cover> your Anti-Procrastination App Faster with me
      </h1>
      <p className="mb-6 max-w-2xl space-y-2 text-center text-xl text-muted-foreground">
        Hi, I&apos;m Eriquy Jhordan 👋 a Full Stack Developer with over 4 years
        of experience, specializing in Next.js, React.js, TypeScript, and
        Firebase.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/sign-in">
          <Button size="lg" className="rounded-full">
            Login in
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button size="lg" variant="outline" className="rounded-full">
            Sign up
          </Button>
        </Link>
      </div>
      <div className="max-w-4xl">
        <Image
          src={DarkApplication}
          className="relative hidden rounded-sm dark:block"
          alt="application screenshot"
        />
        <Image
          src={LightApplication}
          className="relative block rounded-sm dark:hidden"
          alt="application screenshot"
        />
      </div>
    </div>
  )
}
