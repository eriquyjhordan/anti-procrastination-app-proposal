'use client'

import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

export default function CommandSearch() {
  return (
    <div className="mx-auto w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          placeholder="Search or type a command"
          className="h-10 w-full border-none bg-gray-50 pl-9 pr-16 text-sm placeholder:text-xs placeholder:font-normal dark:bg-gray-800 dark:placeholder:text-gray-300"
        />
        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
          <span className="rounded bg-gray-200 px-1 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            ⌘ K
          </span>
        </div>
      </div>
    </div>
  )
}
