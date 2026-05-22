'use client';

import { useState, useEffect } from 'react';
import { robotoMono } from '@/app/ui/fonts';
import { users } from '@/app/lib/admin-data';
import { UserCircleIcon, ShieldCheckIcon, Cog6ToothIcon, KeyIcon, XMarkIcon, BellIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { ProfileSkeleton } from '@/app/ui/skeletons';

// Komponen Loading dipisah agar lebih rapi
function ProfileLoading() {
  return <ProfileSkeleton />; // Asumsi ProfileSkeleton sudah ada
}

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const user = users[0];

  const [openPassword, setOpenPassword] = useState(false);
  const [openPreferences, setOpenPreferences] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Simulasi Loading
  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (isLoading) return <ProfileLoading />;

  return (
    <div className={`min-h-screen bg-[#0d0415] text-white p-6 ${robotoMono.className}`}>
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-gray-400 text-sm">Manage your security and system preferences</p>
      </div>

      {/* GRID CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1a0b2e]/80 border border-white/5 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4">Profile Information</h2>
            <div className="flex items-center gap-4">
              <UserCircleIcon className="w-16 h-16 text-[#bc66ff]" />
              <div>
                <p className="text-lg font-bold">{user.name}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (ACTIONS) */}
        <div className="space-y-6">
          <button 
            onClick={() => setOpenPassword(true)}
            className="w-full flex items-center gap-3 bg-[#1a0b2e] p-4 rounded-xl border border-white/5 hover:border-[#bc66ff] transition-all"
          >
            <KeyIcon className="w-5 h-5" /> Change Password
          </button>
          <button 
            onClick={() => setOpenPreferences(true)}
            className="w-full flex items-center gap-3 bg-[#1a0b2e] p-4 rounded-xl border border-white/5 hover:border-[#bc66ff] transition-all"
          >
            <Cog6ToothIcon className="w-5 h-5" /> Preferences
          </button>
        </div>
      </div>
    </div>
  );
}