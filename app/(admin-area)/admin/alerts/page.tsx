'use client';

import { robotoMono } from '@/app/ui/fonts';
import { alerts } from '@/app/lib/admin-data';
import {
  ExclamationTriangleIcon,
  CloudIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function AlertsPage() {
  return (
    <div className={`min-h-screen bg-transparent text-white p-6 ${robotoMono.className}`}>

      {/*HEADER*/}
      <div className="mb-8">
        <h1 className="text-xl font-bold tracking-widest">System Alerts</h1>
        <p className="text-[11px] text-gray-400 mt-1">
          Monitor all system notifications and warnings
        </p>
      </div>

      {/*ALERT LIST*/}
      <div className="space-y-4">
        {alerts.map((a) => (
          <div
            key={a.id}
            className={`flex gap-4 p-5 rounded-2xl border border-white/5
            ${
              a.color === 'rose' &&
              'bg-rose-500/10 border-l-2 border-rose-500'
            }
            ${
              a.color === 'purple' &&
              'bg-[#bc66ff]/10 border-l-2 border-[#bc66ff]'
            }
            ${
              a.color === 'gray' &&
              'bg-white/5 border-l-2 border-gray-500'
            }
          `}
          >
            {/*ICON*/}
            <div className="mt-1">
              {a.color === 'rose' && (
                <ExclamationTriangleIcon className="w-5 text-rose-500" />
              )}
              {a.color === 'purple' && (
                <CloudIcon className="w-5 text-[#bc66ff]" />
              )}
              {a.color === 'gray' && (
                <ClockIcon className="w-5 text-gray-400" />
              )}
            </div>

            {/* CONTENT */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <p
                  className={`text-[12px] font-bold uppercase
                  ${
                    a.color === 'rose' && 'text-rose-500'
                  }
                  ${
                    a.color === 'purple' && 'text-[#bc66ff]'
                  }
                  ${
                    a.color === 'gray' && 'text-gray-400'
                  }
                `}
                >
                  {a.title}
                </p>

                <p className="text-[9px] text-gray-500">{a.time}</p>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed">
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}