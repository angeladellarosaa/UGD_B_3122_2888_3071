// // This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// // https://nextjs.org/learn/dashboard-app/fetching-data
// const users = [
//   {
//     id: '410544b2-4001-4271-9855-fec4b6a6442a',
//     name: 'User',
//     email: 'user@nextmail.com',
//     password: '123456',
//   },
// ];

// const customers = [
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     name: 'Evil Rabbit',
//     email: 'evil@rabbit.com',
//     image_url: '/customers/evil-rabbit.png',
//   },
//   {
//     id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
//     name: 'Delba de Oliveira',
//     email: 'delba@oliveira.com',
//     image_url: '/customers/delba-de-oliveira.png',
//   },
//   {
//     id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
//     name: 'Lee Robinson',
//     email: 'lee@robinson.com',
//     image_url: '/customers/lee-robinson.png',
//   },
//   {
//     id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
//     name: 'Michael Novotny',
//     email: 'michael@novotny.com',
//     image_url: '/customers/michael-novotny.png',
//   },
//   {
//     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//     name: 'Amy Burns',
//     email: 'amy@burns.com',
//     image_url: '/customers/amy-burns.png',
//   },
//   {
//     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//     name: 'Balazs Orban',
//     email: 'balazs@orban.com',
//     image_url: '/customers/balazs-orban.png',
//   },
// ];

// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

// // export { users, customers, invoices, revenue };

// // FLEET
// export const dashboardStats = [
//   { label: "VESSELS EN ROUTE", value: "42", sub: "+3%", subColor: "text-emerald-400" },
//   { label: "IN PORT", value: "18", sub: "STABLE", subColor: "text-gray-600" },
//   { label: "DELAYED", value: "04", sub: "-2%", subColor: "text-rose-500" },
//   { label: "MAINTENANCE", value: "07", sub: "FLEET", subColor: "text-amber-500" },
// ];

// export const vesselData = [
//   { name: "VOID RUNNER 01", location: "Jakarta Port", eta: "2024.05.22 / 14:30", status: "EN ROUTE", statusColor: "text-purple-400", update: "2M AGO" },
//   { name: "NEON DRIFTER X", location: "Surabaya Port", eta: "2024.05.21 / 09:15", status: "IN PORT", statusColor: "text-[#bc66ff]", update: "5M AGO" },
//   { name: "SILENT STAR 04", location: "Medan Port", eta: "2024.05.23 / 11:45", status: "DELAYED", statusColor: "text-rose-500", update: "12M AGO" },
//   { name: "CHROME GHOST 7", location: "Balikpapan Port", eta: "---", status: "OFFLINE", statusColor: "text-gray-600", update: "44M AGO" },
//   { name: "VECTOR SHADOW 09", location: "Palembang Port", eta: "2024.05.22 / 18:00", status: "EN ROUTE", statusColor: "text-purple-400", update: "1M AGO" },
//   { name: "PULSE RUNNER V", location: "Banjarmasin Port", eta: "2024.05.21 / 22:30", status: "IN PORT", statusColor: "text-[#bc66ff]", update: "8M AGO" },
// ];

// export const maintenanceData = [
//   { name: "NEON HORIZON", progress: 82, eta: "18H", status: "ACTIVE", engineEff: "94%", nextService: "12 DAYS" },
//   { name: "OCEAN STAR", progress: 45, eta: "45H", status: "CRITICAL", failure: "FUEL PUMP 4", temp: "92°C" },
//   { name: "SEA VOYAGER", progress: 12, eta: "120H", status: "PLANNED", hullInspect: "PENDING", location: "PORT KELANG" },
//   { name: "ARCTIC GALE", progress: 65, eta: "32H", status: "DRY DOCK", refitProg: "45%", dockId: "SDC-09" },
//   { name: "PACIFIC DRIFT", progress: 95, eta: "4H", status: "ACTIVE", engineEff: "98%", nextService: "28 DAYS" },
// ];

// // MAP
// export const vesselData = [
//   { id: "19910001", name: "NEON HORIZON", status: "EN ROUTE", statusColor: "text-emerald-500", speed: "14.2 KN", destination: "SINGAPORE TERMINAL 2" },
//   { id: "19910002", name: "OCEAN STAR", status: "MAINTENANCE", statusColor: "text-rose-500", speed: "-", destination: "ROTTERDAM PIER 4" },
//   { id: "20030003", name: "SEA VOYAGER", status: "IN PORT", statusColor: "text-indigo-500", speed: "0.2 KN", destination: "LOS ANGELES TERMINAL 1" },
//   { id: "20040004", name: "ARCTIC GALE", status: "EN ROUTE", statusColor: "text-emerald-500", speed: "18.5 KN", destination: "HAMBURG GATE C" },
//   { id: "20050005", name: "PACIFIC DRIFT", status: "ANCHORAGE", statusColor: "text-amber-500", speed: "1.1 KN", destination: "TOKYO BAY" },
// ];

// export const shipmentData = [
//   { 
//     id: "#STN-1991", 
//     vessel: "NEON HORIZON", 
//     type: "ELECTRONICS", 
//     destination: "SINGAPORE [SIN]", 
//     weather: "CLEAR", 
//     weatherIcon: "☀️", 
//     quantity: "14,200 MT", 
//     status: "ON ROUTE", 
//     statusColor: "text-purple-400 bg-purple-400/10" 
//   },
//   { 
//     id: "#STN-1992", 
//     vessel: "OCEAN STAR", 
//     type: "RAW MATERIALS", 
//     destination: "ROTTERDAM [RTM]", 
//     weather: "STORMY", 
//     weatherIcon: "⛈️", 
//     quantity: "62,500 MT", 
//     status: "DELAYED", 
//     statusColor: "text-rose-500 bg-rose-500/10", 
//     alert: true 
//   },
//   { 
//     id: "#STN-2003", 
//     vessel: "SEA VOYAGER", 
//     type: "MEDICAL", 
//     destination: "LOS ANGELES [LAX]", 
//     weather: "FOGGY", 
//     weatherIcon: "🌫️", 
//     quantity: "2,400 MT", 
//     status: "DELIVERED", 
//     statusColor: "text-emerald-500 bg-emerald-500/10" 
//   },
//   { 
//     id: "#STN-2004", 
//     vessel: "ARCTIC GALE", 
//     type: "ELECTRONICS", 
//     destination: "SHANGHAI [PVG]", 
//     weather: "RAIN", 
//     weatherIcon: "🌧️", 
//     quantity: "45,000 MT", 
//     status: "ON ROUTE", 
//     statusColor: "text-purple-400 bg-purple-400/10" 
//   },
//   { 
//     id: "#STN-2005", 
//     vessel: "PACIFIC DRIFT", 
//     type: "RAW MATERIALS", 
//     destination: "SYDNEY [SYD]", 
//     weather: "CLEAR", 
//     weatherIcon: "☀️", 
//     quantity: "108,000 MT", 
//     status: "ON ROUTE", 
//     statusColor: "text-purple-400 bg-purple-400/10" 
//   },
// ];

// // ANALYTICS 
// export const maintenanceLogs = [
//   {
//     id: "AE-741-B",
//     category: "Freighter",
//     task: "Core Thruster Realignment",
//     date: "2024.08.14",
//     status: "COMPLETED",
//     statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
//   },
//   {
//     id: "AE-102-X",
//     category: "Scout",
//     task: "Sensor Array Calibration",
//     date: "2024.08.14",
//     status: "PENDING",
//     statusColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
//   },
//   {
//     id: "AE-332-R",
//     category: "Mining",
//     task: "Hydraulic Pressure Test",
//     date: "2024.08.12",
//     status: "COMPLETED",
//     statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
//   },
//   {
//     id: "AE-112-L",
//     category: "Tug",
//     task: "Gravitational Lock Repair",
//     date: "2024.08.12",
//     status: "CRITICAL",
//     statusColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
//   },
// ];

// export const maintenanceFreq = [
//   { label: "HEAVY FREIGHTERS", value: 37, percentage: 65 },
//   { label: "GRID-REGION TUGS", value: 45, percentage: 85 },
//   { label: "ATMOSPHERIC SCOUTS", value: 112, percentage: 45 },
//   { label: "MINING PLATFORMS", value: 24, percentage: 30 },
// ];

// export const performanceScores = [
//   { name: "MV MAJESTIC STAR", score: 9.82, percentage: 95 },
//   { name: "SS NAVIGATOR", score: 9.45, percentage: 88 },
//   { name: "IRON GALLEY", score: 8.92, percentage: 80 },
//   { name: "CYAN DART", score: 7.24, percentage: 65 },
// ];

// export const vesselBreakdown = [
//   {
//     name: "MV MAJESTIC STAR",
//     id: "MS-01",
//     score: 95,
//     trips: 124,
//     speed: "18.4 KNOTS",
//     status: "OPTIMAL",
//   },
//   {
//     name: "SS NAVIGATOR",
//     id: "SS-02",
//     score: 88,
//     trips: 96,
//     speed: "16.2 KNOTS",
//     status: "OPTIMAL",
//   },
//   {
//     name: "VOID WALKER",
//     id: "VW-03",
//     score: 82,
//     trips: 104,
//     speed: "21.1 KNOTS",
//     status: "OPTIMAL",
//   },
//   {
//     name: "CYAN DART",
//     id: "CD-04",
//     score: 54,
//     trips: 45,
//     speed: "14.8 KNOTS",
//     status: "MAINTENANCE",
//   },
// ];

// export const data = [40, 70, 55, 90, 60, 75, 50, 85, 65, 95, 45, 80];

// export const labels = ["MAY 01", "MAY 08", "MAY 15", "MAY 22", "MAY 30"];

// export const data = [
//   {
//     name: "MV NEON HORIZON",
//     id: "ID: 20260011",
//     fuel: 85.2,
//     fuelText: "REMAINING",
//     rate: "12.8 MT/DAY",
//     dist: "3,120 NM",
//     score: "96.5 / HIGH",
//     color: "bg-purple-400",
//   },
//   {
//     name: "MV OCEAN STAR",
//     id: "ID: 20260022",
//     fuel: 28.4,
//     fuelText: "CRITICAL",
//     rate: "19.2 MT/DAY",
//     dist: "850 NM",
//     score: "68.2 / LOW",
//     color: "bg-red-400",
//   },
//   {
//     name: "MV SEA VOYAGER",
//     id: "ID: 20260033",
//     fuel: 62.1,
//     fuelText: "NOMINAL",
//     rate: "14.5 MT/DAY",
//     dist: "4,210 NM",
//     score: "92.1 / OPTIMAL",
//     color: "bg-purple-300",
//   },
//   {
//     name: "MV ARCTIC GALE",
//     id: "ID: 20260044",
//     fuel: 91.7,
//     fuelText: "FUELLED",
//     rate: "16.0 MT/DAY",
//     dist: "1,204 NM",
//     score: "89.4 / OPTIMAL",
//     color: "bg-purple-400",
//   },
//   {
//     name: "MV PACIFIC DRIFT",
//     id: "ID: 20260055",
//     fuel: 45.8,
//     fuelText: "NOMINAL",
//     rate: "13.2 MT/DAY",
//     dist: "2,150 NM",
//     score: "84.7 / STABLE",
//     color: "bg-purple-200",
//   },
// ];

// export const alerts = [
//   {
//     type: "CRITICAL",
//     title: "Critical Engine Failure",
//     time: "04:12 WIB",
//     desc: "MV ORION STAR reports pressure drop in Cylinder 4. Emergency maintenance required.",
//     color: "rose"
//   },
//   {
//     type: "WARNING",
//     title: "Weather Warning",
//     time: "02:45 WIB",
//     desc: "Cyclone approaching Route A7. Recommend detour +12nm East.",
//     color: "purple"
//   },
//   {
//     type: "INFO",
//     title: "ETA Delay Prediction",
//     time: "01:15 WIB",
//     desc: "Port Rotterdam congestion: +4h wait time for all incoming vessels.",
//     color: "gray"
//   }, 
//   {
//     type: "CRITICAL",
//     title: "Fuel System Failure",
//     time: "05:30 WIB",
//     desc: "MV PACIFIC DRIFT experiencing abnormal fuel pressure. Immediate inspection required.",
//     color: "rose"
//   },
//   {
//     type: "WARNING",
//     title: "High Wave Detected",
//     time: "03:20 WIB",
//     desc: "Sea conditions rising above safe threshold near Tokyo Bay.",
//     color: "purple"
//   },
//   {
//     type: "INFO",
//     title: "Routine Maintenance Scheduled",
//     time: "00:45 WIB",
//     desc: "MV SEA VOYAGER scheduled for routine inspection at Los Angeles Terminal.",
//     color: "gray"
//   },
//   {
//     type: "WARNING",
//     title: "Navigation Signal Weak",
//     time: "06:10 WIB",
//     desc: "GPS signal instability detected in Hamburg sector. Monitor closely.",
//     color: "purple"
//   }
// ];

// lib/data-dummy.ts

// ==========================================
// 1. DATA MASTER (SINGLE SOURCE OF TRUTH)
// ==========================================

const NEON_HORIZON = {
  id: "19910011",
  name: "NEON HORIZON",
  status: "EN ROUTE",
  statusColor: "text-emerald-500",
  location: "Jakarta Port",
  destination: "SINGAPORE [SIN]",
  speed: "14.2 KN",
  fuel: 85.2,
  fuelText: "REMAINING",
  eta: "2024.05.22 / 14:30",
  type: "ELECTRONICS",
  weather: "CLEAR",
  weatherIcon: "☀️",
  score: 96.5,
  update: "2M AGO",
  progress: 100,
  color: "bg-[#bc66ff]"
};

const OCEAN_STAR = {
  id: "19910022",
  name: "OCEAN STAR",
  status: "MAINTENANCE",
  statusColor: "text-rose-500",
  location: "Surabaya Port",
  destination: "ROTTERDAM [RTM]",
  speed: "0.0 KN",
  fuel: 28.4,
  fuelText: "CRITICAL",
  eta: "---",
  type: "RAW MATERIALS",
  weather: "STORMY",
  weatherIcon: "⛈️",
  score: 68.2,
  update: "5M AGO",
  progress: 45,
  failure: "FUEL PUMP 4",
  temp: "92°C",
  color: "bg-rose-500"
};

const SEA_VOYAGER = {
  id: "20030033",
  name: "SEA VOYAGER",
  status: "IN PORT",
  statusColor: "text-indigo-500",
  location: "Medan Port",
  destination: "LOS ANGELES [LAX]",
  speed: "0.2 KN",
  fuel: 62.1,
  fuelText: "NOMINAL",
  eta: "2024.05.23 / 11:45",
  type: "MEDICAL",
  weather: "FOGGY",
  weatherIcon: "🌫️",
  score: 92.1,
  update: "12M AGO",
  progress: 12,
  color: "bg-indigo-400"
};

const ARCTIC_GALE = {
  id: "20040044",
  name: "ARCTIC GALE",
  status: "EN ROUTE",
  statusColor: "text-emerald-500",
  location: "Balikpapan Port",
  destination: "SHANGHAI [PVG]",
  speed: "18.5 KN",
  fuel: 91.7,
  fuelText: "FUELLED",
  eta: "2024.05.24 / 08:00",
  type: "ELECTRONICS",
  weather: "RAIN",
  weatherIcon: "🌧️",
  score: 89.4,
  update: "44M AGO",
  progress: 65,
  color: "bg-emerald-400"
};

const PACIFIC_DRIFT = {
  id: "20050055",
  name: "PACIFIC DRIFT",
  status: "ANCHORAGE",
  statusColor: "text-amber-500",
  location: "Palembang Port",
  destination: "SYDNEY [SYD]",
  speed: "1.1 KN",
  fuel: 45.8,
  fuelText: "NOMINAL",
  eta: "2024.05.22 / 18:00",
  type: "RAW MATERIALS",
  weather: "CLEAR",
  weatherIcon: "☀️",
  score: 84.7,
  update: "1M AGO",
  progress: 95,
  color: "bg-amber-400"
};

// ==========================================
// 2. EXPORTED DATA (SINKRON KE SEMUA HALAMAN)
// ==========================================

// --- DASHBOARD STATS ---
export const dashboardStats = [
  { label: "VESSELS EN ROUTE", value: "02", sub: "+3%", subColor: "text-emerald-400" },
  { label: "IN PORT", value: "01", sub: "STABLE", subColor: "text-gray-600" }, // Disesuaikan: Sea Voyager (1)
  { label: "ANCHORAGE", value: "01", sub: "WAITING", subColor: "text-amber-500" }, // Disesuaikan: Pacific Drift (1)
  { label: "MAINTENANCE", value: "01", sub: "ALERT", subColor: "text-rose-500" }, // Disesuaikan: Ocean Star (1)
];

// --- FLEET OVERVIEW TABLE ---
export const vesselData = [
  { name: NEON_HORIZON.name, location: NEON_HORIZON.location, eta: NEON_HORIZON.eta, status: NEON_HORIZON.status, statusColor: NEON_HORIZON.statusColor, update: NEON_HORIZON.update },
  { name: OCEAN_STAR.name, location: OCEAN_STAR.location, eta: OCEAN_STAR.eta, status: OCEAN_STAR.status, statusColor: OCEAN_STAR.statusColor, update: OCEAN_STAR.update },
  { name: SEA_VOYAGER.name, location: SEA_VOYAGER.location, eta: SEA_VOYAGER.eta, status: SEA_VOYAGER.status, statusColor: SEA_VOYAGER.statusColor, update: SEA_VOYAGER.update },
  { name: ARCTIC_GALE.name, location: ARCTIC_GALE.location, eta: ARCTIC_GALE.eta, status: ARCTIC_GALE.status, statusColor: ARCTIC_GALE.statusColor, update: ARCTIC_GALE.update },
  { name: PACIFIC_DRIFT.name, location: PACIFIC_DRIFT.location, eta: PACIFIC_DRIFT.eta, status: PACIFIC_DRIFT.status, statusColor: PACIFIC_DRIFT.statusColor, update: PACIFIC_DRIFT.update },
];

// --- MAINTENANCE PAGE ---
export const maintenanceData = [
  { name: NEON_HORIZON.name, progress: 100, eta: "READY", status: "ACTIVE", engineEff: "94%", nextService: "12 DAYS" },
  { name: OCEAN_STAR.name, progress: OCEAN_STAR.progress, eta: "45H", status: "CRITICAL", failure: OCEAN_STAR.failure, temp: OCEAN_STAR.temp },
  { name: SEA_VOYAGER.name, progress: SEA_VOYAGER.progress, eta: "120H", status: "PLANNED", hullInspect: "PENDING", location: SEA_VOYAGER.location },
];

// --- MAP PAGE ---
export const mapVesselData = [
  { id: NEON_HORIZON.id, name: NEON_HORIZON.name, status: NEON_HORIZON.status, statusColor: NEON_HORIZON.statusColor, speed: NEON_HORIZON.speed, destination: NEON_HORIZON.destination },
  { id: OCEAN_STAR.id, name: OCEAN_STAR.name, status: OCEAN_STAR.status, statusColor: OCEAN_STAR.statusColor, speed: OCEAN_STAR.speed, destination: OCEAN_STAR.destination },
  { id: SEA_VOYAGER.id, name: SEA_VOYAGER.name, status: SEA_VOYAGER.status, statusColor: SEA_VOYAGER.statusColor, speed: SEA_VOYAGER.speed, destination: SEA_VOYAGER.destination },
  { id: ARCTIC_GALE.id, name: ARCTIC_GALE.name, status: ARCTIC_GALE.status, statusColor: ARCTIC_GALE.statusColor, speed: ARCTIC_GALE.speed, destination: ARCTIC_GALE.destination },
  { id: PACIFIC_DRIFT.id, name: PACIFIC_DRIFT.name, status: PACIFIC_DRIFT.status, statusColor: PACIFIC_DRIFT.statusColor, speed: PACIFIC_DRIFT.speed, destination: PACIFIC_DRIFT.destination },
];

// --- SHIPMENT PAGE ---
export const shipmentData = [
  { id: "#STN-1991", vessel: NEON_HORIZON.name, type: NEON_HORIZON.type, destination: NEON_HORIZON.destination, weather: NEON_HORIZON.weather, weatherIcon: NEON_HORIZON.weatherIcon, quantity: "14,200 MT", status: "ON ROUTE", statusColor: "text-emerald-400 bg-emerald-400/10" },
  { id: "#STN-1992", vessel: OCEAN_STAR.name, type: OCEAN_STAR.type, destination: OCEAN_STAR.destination, weather: OCEAN_STAR.weather, weatherIcon: OCEAN_STAR.weatherIcon, quantity: "62,500 MT", status: "DELAYED", statusColor: "text-rose-500 bg-rose-500/10", alert: true },
  { id: "#STN-2003", vessel: SEA_VOYAGER.name, type: SEA_VOYAGER.type, destination: SEA_VOYAGER.destination, weather: SEA_VOYAGER.weather, weatherIcon: SEA_VOYAGER.weatherIcon, quantity: "2,400 MT", status: "ARRIVED", statusColor: "text-indigo-400 bg-indigo-400/10" },
];

// --- ANALYTICS / LOGS ---
export const maintenanceLogs = [
  { id: "AE-741-B", category: "Freighter", task: "Thruster Realignment", date: "2024.08.14", status: "COMPLETED", statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
  { id: "AE-112-L", category: "Tug", task: `Repair ${OCEAN_STAR.failure}`, date: "2024.08.12", status: "CRITICAL", statusColor: "bg-rose-500/10 text-rose-500 border-rose-500/20" },
];

export const fuelAnalyticsData = [
  { name: NEON_HORIZON.name, id: `ID: ${NEON_HORIZON.id}`, fuel: NEON_HORIZON.fuel, fuelText: NEON_HORIZON.fuelText, rate: "12.8 MT/DAY", dist: "3,120 NM", score: "96.5 / HIGH", color: NEON_HORIZON.color },
  { name: OCEAN_STAR.name, id: `ID: ${OCEAN_STAR.id}`, fuel: OCEAN_STAR.fuel, fuelText: OCEAN_STAR.fuelText, rate: "19.2 MT/DAY", dist: "850 NM", score: "68.2 / LOW", color: OCEAN_STAR.color },
];

export const alerts = [
  { type: "CRITICAL", title: "Engine Failure", time: "04:12 WIB", desc: `MV ${OCEAN_STAR.name} reports ${OCEAN_STAR.failure}.`, color: "rose" },
  { type: "WARNING", title: "Weather Warning", time: "02:45 WIB", desc: "Cyclone approaching Sector 7G.", color: "purple" },
];

export const chartData = [85, 28, 62, 91, 45]; 
export const chartLabels = ["NEON", "STAR", "VOYAGER", "GALE", "DRIFT"];

export const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: 'password123',
  },
];

export const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Dummy Customer',
    email: 'dummy@customer.com',
    image_url: '/customers/dummy.png',
  },
];

export const invoices = [
  {
    customer_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    amount: 1000,
    status: 'pending',
    date: '2022-12-06',
  },
];

export const revenue = [
  { month: 'Jan', revenue: 2000 },
];