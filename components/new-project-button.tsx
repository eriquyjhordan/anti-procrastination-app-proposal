'use client'

import { ChevronDown, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function NewProjectButton() {
  return (
    <div className="flex">
      <Button className="rounded-r-none bg-blue-600 px-4 text-xs text-primary hover:bg-blue-700">
        <Plus className="mr-2 h-2 w-2" />
        New Project
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            className="rounded-l-none border-l border-blue-500 bg-blue-600 px-2 text-primary hover:bg-blue-700"
          >
            <ChevronDown className="h-2 w-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>New Web Project</DropdownMenuItem>
          <DropdownMenuItem>New Mobile Project</DropdownMenuItem>
          <DropdownMenuItem>Import Project</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
