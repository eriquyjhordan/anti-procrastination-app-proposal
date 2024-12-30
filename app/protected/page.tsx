import { redirect } from 'next/navigation'

import NotesSection from '@/components/notes-section'
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
    <div className="flex w-full flex-1 flex-col">
      <TaskTable />
      <div className="w-1/2 rounded-lg border border-foreground/10">
        <NotesSection />
      </div>
    </div>
  )
}
