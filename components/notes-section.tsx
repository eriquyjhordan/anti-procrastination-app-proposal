'use client'

import { FileText } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'

export default function NotesSection() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6">
      <div className="mb-6 flex items-center gap-2">
        <FileText className="h-5 w-5 text-gray-500" />
        <h2 className="text-xl font-semibold">Notes</h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Checkbox className="mt-1" />
          <div className="space-y-1">
            <h3 className="font-medium">Landing Page For Website</h3>
            <p className="text-sm text-gray-600">
              To get started on a landing page, could you provide a bit more
              detail about its purpose?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox className="mt-1" />
          <div className="space-y-1">
            <h3 className="font-medium">Fixing icons with dark backgrounds</h3>
            <p className="text-sm text-gray-600">
              Use icons that are easily recognizable and straightforward. Avoid
              overly complex designs that might confuse users
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            className="mt-1 border-purple-400 bg-purple-100"
            checked={true}
          />
          <div className="space-y-1">
            <h3 className="font-medium text-gray-500 line-through">
              Discussion regarding userflow improvement
            </h3>
            <p className="text-sm text-gray-600">
              What&apos;s the main goal of the landing page? (e.g., lead
              generation, product )
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
