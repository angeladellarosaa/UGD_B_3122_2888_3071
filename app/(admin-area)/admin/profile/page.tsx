import { Suspense } from 'react';
import { users } from '@/app/lib/admin-data'; 
import ProfilePage from '@/app/ui/profile-page'; 
import { ProfileSkeleton } from '@/app/ui/skeletons'; 

export default async function Page() {
  const userData = users[0]; 
  const userCount = users.length;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfilePage 
        initialUser={userData} 
        totalUsers={userCount} 
      />
    </Suspense>
  );
}