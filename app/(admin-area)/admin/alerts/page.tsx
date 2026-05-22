import { Suspense } from 'react';
import AlertsPage from '@/app/ui/alerts-page';
import { AlertsSkeleton } from '@/app/ui/skeletons';
import { alerts } from '@/app/lib/placeholder-data';

export default async function Page() {
  // Simulasi delay 1 detik agar Skeleton terlihat
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Suspense fallback={<AlertsSkeleton />}>
      <AlertsPage initialAlerts={alerts} />
    </Suspense>
  );
}