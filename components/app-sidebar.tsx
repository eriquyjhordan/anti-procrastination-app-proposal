'use client'

import {
  FileText,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Plus,
  Receipt,
  Settings,
} from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

interface NavItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
  variant?: 'default' | 'primary'
  badge?: number
}

const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Projects',
    icon: FileText,
  },
  {
    title: 'My Task',
    icon: FileText,
    variant: 'primary',
  },
  {
    title: 'Chats',
    icon: MessageSquare,
  },
  {
    title: 'Documents',
    icon: FileText,
  },
  {
    title: 'Receipts',
    icon: Receipt,
  },
]

const projects = [
  {
    title: 'Event Planning',
    color: 'bg-pink-200',
  },
  {
    title: 'Breakfast Plan',
    color: 'bg-green-200',
  },
]

const footerNavItems: NavItem[] = [
  {
    title: 'Settings',
    icon: Settings,
  },
  {
    title: 'Help & Support',
    icon: HelpCircle,
    badge: 8,
  },
]

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(true)

  return (
    <div
      className={cn(
        'flex flex-col h-screen border-r bg-background transition-all duration-300',
        isCollapsed ? 'w-[60px]' : 'w-[240px]',
      )}
    >
      <div className="flex h-16 items-center border-b bg-card p-4">
        <Button
          variant="ghost"
          className={cn(
            'flex w-full px-2 justify-start text-foreground',
            isCollapsed && 'justify-center',
          )}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className={cn('font-semibold', isCollapsed && 'hidden')}>
            Task Manager
          </span>
          <span className={cn('font-semibold hidden', isCollapsed && 'block')}>
            TM
          </span>
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2 p-2">
          {mainNavItems.map((item) => (
            <Button
              key={item.title}
              variant={item.variant === 'primary' ? 'default' : 'ghost'}
              className={cn(
                'w-full justify-start gap-2 text-foreground',
                isCollapsed && 'justify-center px-2',
                item.variant === 'primary' &&
                  'bg-primary text-primary-foreground hover:bg-primary-hover hover:text-primary-hover-foreground',
              )}
            >
              <item.icon className={cn('h-4 w-4', isCollapsed && 'h-5 w-5')} />
              <span
                className={cn(
                  isCollapsed && 'hidden',
                  item.variant === 'primary' &&
                    'text-primary-foreground hover:text-primary-hover-foreground',
                )}
              >
                {item.title}
              </span>
            </Button>
          ))}

          <Collapsible
            open={isProjectsOpen && !isCollapsed}
            onOpenChange={setIsProjectsOpen}
          >
            <div className="flex items-center justify-between px-2 py-1">
              <span
                className={cn(
                  'text-sm font-medium text-muted-foreground',
                  isCollapsed && 'hidden',
                )}
              >
                Projects
              </span>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn('p-0 h-6 w-6', isCollapsed && 'hidden')}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Toggle projects</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-1">
              {projects.map((project) => (
                <Button
                  key={project.title}
                  variant="ghost"
                  className="h-8 w-full justify-start gap-2"
                >
                  <div className={cn('h-2 w-2 rounded', project.color)} />
                  <span className="text-sm text-foreground">
                    {project.title}
                  </span>
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </ScrollArea>
      <div className="space-y-2 border-t bg-card p-2">
        {footerNavItems.map((item) => (
          <Button
            key={item.title}
            variant="ghost"
            className={cn(
              'w-full justify-start gap-2 text-foreground',
              isCollapsed && 'justify-center px-2',
            )}
          >
            <item.icon className={cn('h-4 w-4', isCollapsed && 'h-5 w-5')} />
            <span className={cn(isCollapsed && 'hidden')}>{item.title}</span>
            {item.badge && (
              <span
                className={cn(
                  'ml-auto bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full',
                  isCollapsed && 'hidden',
                )}
              >
                {item.badge}
              </span>
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
