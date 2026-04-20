'use client';

import MetricCard from "@/components/analytics/MetricCard";
import ChartBox from "@/components/analytics/ChartBox";
import DonutChart from "@/components/analytics/DonutChart";
import VesselTable from "@/components/analytics/VesselTable";

export default function Page() {
  return (
    <div className="w-full">
      <div className="px-10 pt-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-wide text-white uppercase">
            Analytic Dashboard
          </h1>
          <p className="text-[10px] tracking-widest opacity-60 text-gray-400 uppercase mt-1">
            Real-time Fuel Diagnostics & Atmospheric Impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard title="TOTAL FUEL CONSUMPTION" value="14,282.5" />
          <MetricCard title="FUEL COST INDEX" value="0.94" />
          <MetricCard title="AVG EFFICIENCY" value="18.4" />
          <MetricCard title="CO2 EMISSION STATUS" value="44.8k" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2 bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-4 backdrop-blur-sm">
            <ChartBox />
          </div>

          <div className="bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-4 backdrop-blur-sm">
            <DonutChart />
          </div>
        </div>

        <div className="mt-8 mb-10">
          <VesselTable />
        </div>

      </div>
    </div>
  );
}