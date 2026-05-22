import { Suspense } from 'react';
import UsersTable from '@/app/ui/users-table';
import { TableSkeleton } from '@/app/ui/skeletons';
import { users, ports } from '@/app/lib/admin-data';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <Suspense fallback={<TableSkeleton />}>
      <UsersTable initialUsers={users} ports={ports} />
    </Suspense>
  );
}