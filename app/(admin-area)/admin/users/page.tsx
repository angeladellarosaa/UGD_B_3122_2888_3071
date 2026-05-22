'use client';

import { useEffect, useState } from 'react';
import { robotoMono } from '@/app/ui/fonts';
import { 
  MagnifyingGlassIcon, PencilSquareIcon, TrashIcon, XMarkIcon, 
  UserIcon, EnvelopeIcon, BriefcaseIcon, MapPinIcon 
} from '@heroicons/react/24/outline';
import { users as initialUsers, ports } from '@/app/lib/admin-data';

// 1. Komponen Loading (Tetap di file yang sama tapi terpisah)
function UsersLoading() {
  return <div className="p-8 text-white">Loading data...</div>;
}

export default function UsersPage() {
  // Semua state harus berada di dalam komponen Client
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [selectedPort, setSelectedPort] = useState('All Ports');

  // Logic simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <UsersLoading />;

  // Logic Filter
  const filteredUsers = userList.filter((u) => 
    u.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedPort === 'All Ports' || ports.find(p => p.id === u.port_id)?.name === selectedPort)
  );

  return (
    <div className={`min-h-screen p-8 ${robotoMono.className} text-white`}>
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      
      {/* Search Bar */}
      <div className="flex gap-4 mb-6">
        <input 
          className="bg-white/5 border border-white/10 p-3 rounded-xl flex-1 text-black"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-[#1a0b2e]/30 border border-white/10 rounded-2xl overflow-hidden">
        {filteredUsers.map((user) => (
          <div key={user.id} className="grid grid-cols-4 gap-4 p-4 border-b border-white/5">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{ports.find(p => p.id === user.port_id)?.name}</p>
            <button className="text-red-400" onClick={() => setUserList(userList.filter(u => u.id !== user.id))}>
              <TrashIcon className="w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}