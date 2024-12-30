'use client'

import { CheckCircle, CircleDot, Clock, Plus, Share } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function DashboardHeader() {
  return (
    <div className="mx-auto w-full max-w-7xl py-6">
      <div className="mb-8 flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            Thursday, 20th February
          </p>
          <h1 className="text-4xl font-bold dark:text-white">
            Good Evening! John,
          </h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Share className="h-4 w-4 dark:text-white" />
            Share
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4 dark:text-white" />
            Add Task
          </Button>
        </div>
      </div>

      <div className="flex w-fit flex-wrap rounded-full border border-gray-100 bg-gray-50 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center gap-3 px-6">
          <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <div>
            <span className="text-xl font-bold dark:text-white">12</span>
            <span className="px-1 font-medium text-gray-700 dark:text-gray-300">
              hrs
            </span>
            <span className="text-gray-600 dark:text-gray-400">Time Saved</span>
          </div>
        </div>
        <div className="h-8 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
        <div className="flex items-center gap-3 px-6">
          <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <div>
            <span className="text-xl font-bold dark:text-white">24</span>
            <span className="px-1 font-medium text-gray-700 dark:text-gray-300">
              Projects
            </span>
            <span className="text-gray-600 dark:text-gray-400">Projects</span>
          </div>
        </div>
        <div className="h-8 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
        <div className="flex items-center gap-3 px-6">
          <CircleDot className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <div>
            <span className="text-xl font-bold dark:text-white">7</span>
            <span className="px-1 font-medium text-gray-700 dark:text-gray-300">
              Projects
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              In-progress
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
