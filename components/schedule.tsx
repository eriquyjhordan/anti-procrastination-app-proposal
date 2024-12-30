'use client'

import { Calendar, Monitor, Users } from 'lucide-react'
import { type JSX, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Task {
  id: string
  title: string
  startTime: string
  endTime: string
  accentColor: string
  icon: JSX.Element
  assignees: {
    avatar: string
    initials: string
  }[]
}

const days = [
  { day: 'Mo', date: 15 },
  { day: 'Tu', date: 16 },
  { day: 'We', date: 17 },
  { day: 'Th', date: 18 },
  { day: 'Fr', date: 19 },
  { day: 'Sa', date: 20 },
  { day: 'Su', date: 14 },
]

const tasks: Task[] = [
  {
    id: '1',
    title: 'Kickoff Meeting',
    startTime: '01:00 PM',
    endTime: '02:30 PM',
    accentColor: 'bg-green-400',
    icon: <Monitor className="h-4 w-4" />,
    assignees: [
      { avatar: '/placeholder.svg', initials: 'JD' },
      { avatar: '/placeholder.svg', initials: 'AB' },
    ],
  },
  {
    id: '2',
    title: 'Create Wordpress website for event Registration',
    startTime: '04:00 PM',
    endTime: '02:30 PM',
    accentColor: 'bg-blue-400',
    icon: <Calendar className="h-4 w-4" />,
    assignees: [
      { avatar: '/placeholder.svg', initials: 'CD' },
      { avatar: '/placeholder.svg', initials: 'EF' },
    ],
  },
  {
    id: '3',
    title: 'Create User flow for hotel booking',
    startTime: '05:00 PM',
    endTime: '02:30 PM',
    accentColor: 'bg-purple-400',
    icon: <Users className="h-4 w-4" />,
    assignees: [
      { avatar: '/placeholder.svg', initials: 'GH' },
      { avatar: '/placeholder.svg', initials: 'IJ' },
    ],
  },
]

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(17)

  return (
    <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 dark:bg-gray-800">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-300" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Schedule
          </h2>
        </div>
        <Button variant="ghost" size="icon">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </Button>
      </div>

      <div className="mb-8 flex justify-between">
        {days.map(({ day, date }) => (
          <button
            key={day}
            onClick={() => setSelectedDate(date)}
            className={`flex flex-col items-center rounded-lg p-2 transition-colors
              ${
                selectedDate === date
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
          >
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {day}
            </span>
            <span className="text-lg text-gray-900 dark:text-gray-100">
              {date}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-4">
            <div
              className={`w-1 self-stretch rounded-full ${task.accentColor}`}
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {task.icon}
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {task.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {task.startTime} to {task.endTime}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {task.assignees.map((assignee, index) => (
                      <Avatar
                        key={index}
                        className="border-2 border-white dark:border-gray-800"
                      >
                        <AvatarImage src={assignee.avatar} />
                        <AvatarFallback>{assignee.initials}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-white dark:bg-gray-700"
                    >
                      <DropdownMenuItem className="text-gray-900 dark:text-gray-100">
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-900 dark:text-gray-100">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
