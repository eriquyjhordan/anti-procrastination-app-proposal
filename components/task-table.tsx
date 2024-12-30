'use client'

import {
  ChevronDown,
  MenuIcon,
  MessageSquare,
  PackageIcon,
  Paperclip,
  PenIcon,
  PlaneIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function TaskTable() {
  return (
    <div className="mx-auto w-full p-4">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <MenuIcon className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">My Projects</h1>
          <Button variant="outline" className="ml-2">
            This Week
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Button variant="link" className="text-primary">
          See All
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">
              <div className="flex items-center gap-2">
                <PenIcon className="h-4 w-4" />
                Task Name
              </div>
            </TableHead>
            <TableHead className="w-[30%]">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
                Assign
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
                Status
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-4">
                <svg
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
                <div className="flex flex-col">
                  <span>Help DStudio get more customers</span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>7</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Paperclip className="h-4 w-4" />
                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Phoenix Winters" />
                  <AvatarFallback>PW</AvatarFallback>
                </Avatar>
                <span>Phoenix Winters</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                In Progress
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-4">
                <PlaneIcon className="h-5 w-5 text-gray-500" />
                <div className="flex flex-col">
                  <span>Plan a trip</span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>10</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Paperclip className="h-4 w-4" />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Cohen Merritt" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <span>Cohen Merritt</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                Pending
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-4">
                <PackageIcon className="h-5 w-5 text-gray-500" />
                <div className="flex flex-col">
                  <span>Return a package</span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Paperclip className="h-4 w-4" />
                      <span>8</span>
                    </div>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Lukas Juarez" />
                  <AvatarFallback>LJ</AvatarFallback>
                </Avatar>
                <span>Lukas Juarez</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Completed
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
