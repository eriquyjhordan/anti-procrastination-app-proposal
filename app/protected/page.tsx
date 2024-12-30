import { redirect } from 'next/navigation'

import DashboardHeader from '@/components/dashboard-header'
import NotesSection from '@/components/notes-section'
import Schedule from '@/components/schedule'
import TaskTable from '@/components/task-table'
import { createClient } from '@/utils/supabase/server'

export default async function ProtectedPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/sign-in')
  }

  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden p-4">
      <div
        className="overflow-y-auto"
        style={{ maxHeight: '85vh', scrollbarWidth: 'none' }}
      >
        <DashboardHeader />
        <div className=" rounded-lg border border-foreground/10">
          <TaskTable />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="w-1/2 rounded-lg border border-foreground/10">
            <Schedule />
          </div>
          <div className="w-1/2 rounded-lg border border-foreground/10">
            <NotesSection />
          </div>
        </div>
      </div>
    </div>
  )
}
