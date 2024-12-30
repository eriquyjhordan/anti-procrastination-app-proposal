'use client'

import { CheckCircle, CircleDot, Clock, Plus, Share } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function DashboardHeader() {
  return (
    <div className="mx-auto w-full max-w-7xl py-6">
      <div className="mb-8 flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-gray-600">Thursday, 20th February</p>
          <h1 className="text-4xl font-bold">Good Evening! John,</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Share className="h-4 w-4" />
            Share
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      <div className="flex w-fit flex-wrap rounded-full border border-gray-100 bg-gray-50 py-5 text-sm">
        <div className="flex items-center gap-3  px-6 ">
          <Clock className="h-5 w-5 text-gray-600" />
          <div>
            <span className="text-xl font-bold">12</span>
            <span className="px-1 font-medium text-gray-700">hrs</span>
            <span className=" text-gray-600">Time Saved</span>
          </div>
        </div>
        <div className="h-8 w-0.5 bg-gray-200"></div>
        <div className="flex items-center gap-3  px-6 ">
          <CheckCircle className="h-5 w-5 text-gray-600" />
          <div>
            <span className="text-xl font-bold">24</span>
            <span className="px-1 font-medium text-gray-700">Projects</span>
            <span className=" text-gray-600">Projects</span>
          </div>
        </div>
        <div className="h-8 w-0.5 bg-gray-200"></div>
        <div className="flex items-center gap-3  px-6 ">
          <CircleDot className="h-5 w-5 text-gray-600" />
          <div>
            <span className="text-xl font-bold">7</span>
            <span className="px-1 font-medium text-gray-700">Projects</span>
            <span className=" text-gray-600">In-progress</span>
          </div>
        </div>
      </div>
    </div>
  )
}
