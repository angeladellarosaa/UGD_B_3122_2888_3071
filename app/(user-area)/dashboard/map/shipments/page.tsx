'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { shipmentData } from '@/app/lib/placeholder-data';
import { ShipmentSkeleton } from '@/app/ui/skeletons';

function ShipmentTable({ data }: { data: any[] }) {
  return (
    <div className="bg-[#150e24]/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
      <table className="w-full text-left text-[10px]">

        <thead className="text-gray-600 uppercase font-black tracking-widest border-b border-white/5 bg-white/[0.02]">
          <tr>
            <th className="px-8 py-6">Shipment ID</th>
            <th className="px-8 py-6">Vessel</th>
            <th className="px-8 py-6">Type</th>
            <th className="px-8 py-6">Destination</th>
            <th className="px-8 py-6">Weather</th>
            <th className="px-8 py-6 text-right">Qty</th>
            <th className="px-8 py-6 text-center">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/5">
          {data.map((s, i) => (
            <tr key={i} className="hover:bg-[#bc66ff]/5 transition-all">

              <td className="px-8 py-5 text-gray-400 font-bold">
                {s.id}
              </td>

              <td className="px-8 py-5 font-black uppercase">
                🚢 {s.vessel}
              </td>

              <td className="px-8 py-5 text-emerald-400">
                {s.type}
              </td>

              <td className="px-8 py-5 text-gray-400 italic uppercase">
                {s.destination}
              </td>

              <td className="px-8 py-5">
                {s.weatherIcon} {s.weather}
              </td>

              <td className="px-8 py-5 text-right font-black">
                {s.quantity}
              </td>

              <td className="px-8 py-5 text-center">
                <span className="px-3 py-1 text-[8px] border border-white/10 rounded-full">
                  {s.status}
                </span>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default function ShipmentPage() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const filteredData = shipmentData.filter(
    (s) =>
      s.vessel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Suspense fallback={<ShipmentSkeleton />}>
      {loading ? (
        <ShipmentSkeleton />
      ) : (
        <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 space-y-8">

          {/* HEADER */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black uppercase">
                Active Shipments
              </h1>
              <p className="text-[10px] text-[#bc66ff]/60 mt-1">
                REAL-TIME LOGISTICS SYSTEM
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] text-gray-500 uppercase">
                Total
              </p>
              <p className="text-2xl font-black">
                {shipmentData.length}
              </p>
            </div>
          </div>

          {/* SEARCH */}
          <div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH SHIPMENT..."
              className="bg-[#150e24] border border-white/10 rounded-full px-6 py-3 w-80 text-[10px]"
            />
          </div>

          {/* TABLE */}
          <ShipmentTable data={filteredData} />

        </div>
      )}
    </Suspense>
  );
}