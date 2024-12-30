import { redirect } from 'next/navigation'

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
    <div className="flex w-full flex-1">
      <TaskTable />
    </div>
  )
}
