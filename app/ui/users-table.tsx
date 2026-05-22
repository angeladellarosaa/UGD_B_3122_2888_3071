'use client';
import { useState } from 'react';
import { robotoMono } from '@/app/ui/fonts';
import { 
  MagnifyingGlassIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  ChevronDownIcon,
  XMarkIcon, 
  ClockIcon, 
  UserIcon, 
  EnvelopeIcon, 
  BriefcaseIcon,
  MapPinIcon, 
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  port_id: number;
  shift: string;
  status: string;
};

type Port = {
  id: number;
  name: string;
};

export default function UsersTable({ initialUsers, ports }: { initialUsers: User[], ports: Port[] }) {
    const [userList, setUserList] = useState<User[]>(initialUsers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletingUser, setDeletingUser] = useState<User | null>(null);
    const [search, setSearch] = useState('');
    const [selectedPort, setSelectedPort] = useState('All Ports');
    const [selectedStatus, setSelectedStatus] = useState('All Status');
    const [formData, setFormData] = useState({ name: '', email: '', role: 'Port Operator', port_id: 1, shift: '08:00 - 17:00' });

    const getPortName = (id: number) => ports.find((p) => p.id === id)?.name || "Unknown";

    const handleSaveUser = (e: React.FormEvent) => {
        e.preventDefault();
        setUserList([{ ...formData, id: userList.length + 1, status: 'ACTIVE' }, ...userList]);
        setIsModalOpen(false);
        setFormData({ name: '', email: '', role: 'Port Operator', port_id: 1, shift: '08:00 - 17:00' });
    };

    const handleOpenEdit = (user: User) => { setEditingUser({ ...user }); setIsEditOpen(true); };
    const handleSaveEdit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingUser) return;
        setUserList(userList.map((u) => (u.id === editingUser.id ? editingUser : u)));
        setIsEditOpen(false); setEditingUser(null);
    };
    const handleOpenDelete = (user: User) => { setDeletingUser(user); setIsDeleteOpen(true); };
    const handleConfirmDelete = () => {
        if (!deletingUser) return;
        setUserList(userList.filter((u) => u.id !== deletingUser.id));
        setIsDeleteOpen(false); setDeletingUser(null);
    };

    const filteredUsers = userList.filter((u) =>
        (selectedPort === 'All Ports' || getPortName(u.port_id) === selectedPort) &&
        (selectedStatus === 'All Status' || u.status === selectedStatus) &&
        u.name.toLowerCase().includes(search.toLowerCase())
    );

    const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[12px] font-bold outline-none focus:border-[#d095ff]/50 transition-all text-white placeholder:text-white/10 uppercase";
    const selectCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[12px] font-bold outline-none text-white appearance-none uppercase tracking-widest cursor-pointer";
    const labelCls = "text-[9px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2";
    const gridCols = "grid grid-cols-[minmax(160px,2fr)_minmax(120px,1fr)_minmax(140px,1.5fr)_minmax(110px,1fr)_minmax(100px,1fr)_80px]";

    return (
        <div className={`min-h-screen bg-transparent text-white p-4 md:p-8 ${robotoMono.className}`}>
        <div className="flex justify-between items-center mb-8">
            <div>
            <h1 className="text-2xl font-black tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">User Management</h1>
            <p className="text-[10px] font-bold text-[#d095ff] tracking-widest mt-1 opacity-80 uppercase">PERSONNEL DATABASE // ACCESS CONTROL</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#d095ff] text-black text-[10px] px-6 py-2.5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(208,149,255,0.4)]">+ Register New User</button>
        </div>

        <div className="bg-[#1a0b2e]/40 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex items-center gap-3 mb-8 shadow-inner">
            <div className="flex items-center gap-3 flex-1 px-4 py-2">
            <MagnifyingGlassIcon className="w-4 shrink-0 text-[#d095ff]" />
            <input placeholder="FILTER_BY_NAME_SEARCH..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent outline-none text-[10px] font-bold tracking-widest w-full text-white placeholder-white/20 uppercase" />
            </div>
            <div className="h-4 w-px bg-white/10 shrink-0" />
            <div className="relative shrink-0">
            <select onChange={(e) => setSelectedPort(e.target.value)} className="appearance-none bg-white/5 border border-white/5 hover:border-[#d095ff]/50 px-5 py-2 rounded-xl text-[10px] font-bold tracking-widest text-gray-300 outline-none cursor-pointer transition-all pr-8 uppercase min-w-[130px]">
                <option className="bg-[#1a0b2e]">All Ports</option>
                {ports.map((port) => <option key={port.id} className="bg-[#1a0b2e]">{port.name}</option>)}
            </select>
            <ChevronDownIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 text-[#d095ff] pointer-events-none" />
            </div>
            <div className="h-4 w-px bg-white/10 shrink-0" />
            <div className="relative shrink-0">
            <select onChange={(e) => setSelectedStatus(e.target.value)} className="appearance-none bg-white/5 border border-white/5 hover:border-[#d095ff]/50 px-5 py-2 rounded-xl text-[10px] font-bold tracking-widest text-gray-300 outline-none cursor-pointer transition-all pr-8 uppercase min-w-[120px]">
                <option className="bg-[#1a0b2e]">All Status</option>
                <option className="bg-[#1a0b2e]">ACTIVE</option>
                <option className="bg-[#1a0b2e]">INACTIVE</option>
            </select>
            <ChevronDownIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 text-[#d095ff] pointer-events-none" />
            </div>
        </div>

        <div className="bg-[#1a0b2e]/30 backdrop-blur-xl rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
            <div className={`${gridCols} px-6 py-4 text-[9px] font-black text-[#d095ff] uppercase tracking-[0.2em] bg-white/5 border-b border-white/10`}>
            <span className="pl-2">Identity</span><span>Role</span><span>Assigned Port</span><span>Shift</span><span>Operational</span><span className="text-right pr-2">Actions</span>
            </div>
            <div className="max-h-[55vh] overflow-y-auto custom-scrollbar">
            {filteredUsers.length === 0 ? <div className="text-center py-16 text-gray-600 text-[11px] tracking-widest uppercase">No users found</div> : filteredUsers.map((user) => (
                <div key={user.id} className={`${gridCols} px-6 py-4 items-center border-b border-white/5 last:border-none hover:bg-[#d095ff]/5 transition-colors group`}>
                <div className="flex flex-col gap-0.5 pl-2 min-w-0"><p className="font-bold tracking-wider text-white group-hover:text-[#d095ff] transition-colors uppercase text-[11px] truncate">{user.name}</p><p className="text-white/30 text-[9px] font-bold tracking-tighter truncate">{user.email}</p></div>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wide truncate">{user.role}</span>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wide truncate">{getPortName(user.port_id)}</span>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wide">{user.shift}</span>
                <div><span className={`inline-block px-3 py-1 rounded-md text-[9px] font-black tracking-widest border ${user.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>{user.status}</span></div>
                <div className="flex items-center justify-end gap-4 pr-2"><button onClick={() => handleOpenEdit(user)}><PencilSquareIcon className="w-4 text-gray-500 hover:text-[#d095ff] transition-all" /></button><button onClick={() => handleOpenDelete(user)}><TrashIcon className="w-4 text-rose-500/50 hover:text-rose-500 transition-all" /></button></div>
                </div>
            ))}
            </div>
        </div>
        
            {/* Modal Add New User */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <div className="bg-[#140a1f] border border-white/10 w-full max-w-2xl rounded-[32px] overflow-hidden">
                    <div className="p-8 pb-4 flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-black text-white uppercase">Add New User</h2>
                        <p className="text-[10px] text-[#d095ff] font-bold tracking-[0.2em] mt-1 uppercase">Terminal Auth Layer</p>
                    </div>
                    <button onClick={() => setIsModalOpen(false)}><XMarkIcon className="w-5 h-5 text-gray-400" /></button>
                    </div>
                    <form onSubmit={handleSaveUser} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={inputCls} />
                    <input required type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputCls} />
                    <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className={selectCls}>
                        <option>Fleet Commander</option><option>Port Operator</option><option>Systems Admin</option>
                    </select>
                    <select value={formData.port_id} onChange={(e) => setFormData({...formData, port_id: parseInt(e.target.value)})} className={selectCls}>
                        {ports.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                    <button type="submit" className="col-span-1 md:col-span-2 bg-[#8b5cf6] text-white py-3 rounded-xl font-black uppercase">Save User</button>
                    </form>
                </div>
                </div>
            )}

            {/* Modal Edit User */}
            {isEditOpen && editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <div className="bg-[#140a1f] border border-white/10 w-full max-w-2xl rounded-[32px] overflow-hidden">
                    <form onSubmit={handleSaveEdit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required type="text" value={editingUser.name} onChange={(e) => setEditingUser({...editingUser, name: e.target.value})} className={inputCls} />
                    <input required type="email" value={editingUser.email} onChange={(e) => setEditingUser({...editingUser, email: e.target.value})} className={inputCls} />
                    <select value={editingUser.status} onChange={(e) => setEditingUser({...editingUser, status: e.target.value})} className={selectCls}>
                        <option value="ACTIVE">ACTIVE</option><option value="INACTIVE">INACTIVE</option>
                    </select>
                    <button type="submit" className="col-span-1 md:col-span-2 bg-[#8b5cf6] text-white py-3 rounded-xl font-black uppercase">Save Changes</button>
                    </form>
                </div>
                </div>
            )}

            {/* Modal Delete User */}
            {isDeleteOpen && deletingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <div className="bg-[#140a1f] border border-white/10 w-full max-w-sm rounded-[32px] p-8 text-center">
                    <h2 className="text-xl font-black text-white mb-4">Delete {deletingUser.name}?</h2>
                    <div className="flex gap-3">
                    <button onClick={() => setIsDeleteOpen(false)} className="flex-1 bg-white/5 py-3 rounded-xl text-white">Cancel</button>
                    <button onClick={handleConfirmDelete} className="flex-1 bg-rose-500/20 py-3 rounded-xl text-rose-400">Delete</button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}