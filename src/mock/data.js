export const navItems = [
  'Dashboard',
  'Alarm Center',
  'Cognitive State',
  'Sensor Analytics',
  'Adaptive UI',
  'Logs',
  'Settings',
];

export const sensors = [
  { id: 'temp', name: 'Temperature', unit: '°C', value: 82, threshold: 78, trend: [65, 68, 70, 73, 78, 82] },
  { id: 'pressure', name: 'Pressure', unit: 'bar', value: 34, threshold: 40, trend: [31, 30, 32, 33, 32, 34] },
  { id: 'motor', name: 'Motor Load', unit: '%', value: 89, threshold: 85, trend: [72, 74, 79, 82, 85, 89] },
  { id: 'vibration', name: 'Vibration', unit: 'mm/s', value: 5.4, threshold: 5.1, trend: [4.2, 4.6, 4.8, 4.9, 5.1, 5.4] },
  { id: 'power', name: 'Power Consumption', unit: 'kW', value: 142, threshold: 155, trend: [129, 131, 135, 138, 140, 142] },
];

export const alarmData = [
  { id: 1, name: 'Motor Overheating', severity: 'High', priority: 'Critical', timestamp: '13:24:15', action: 'Reduce load immediately' },
  { id: 2, name: 'Compressor Pressure Drift', severity: 'Medium', priority: 'High', timestamp: '13:22:01', action: 'Inspect regulator valve' },
  { id: 3, name: 'Conveyor Vibration Spike', severity: 'Medium', priority: 'Medium', timestamp: '13:20:34', action: 'Check bearing alignment' },
  { id: 4, name: 'Cooling Pump Current Drop', severity: 'Low', priority: 'Low', timestamp: '13:18:09', action: 'Run pump diagnostics' },
  { id: 5, name: 'Boiler Feed Sensor Timeout', severity: 'High', priority: 'High', timestamp: '13:15:44', action: 'Switch to redundant sensor' },
  { id: 6, name: 'Grid Harmonic Distortion', severity: 'Low', priority: 'Medium', timestamp: '13:13:21', action: 'Enable filter bank' },
];

export const analytics = {
  alarmFrequency: [
    { t: '08:00', alarms: 3 }, { t: '09:00', alarms: 4 }, { t: '10:00', alarms: 7 }, { t: '11:00', alarms: 5 }, { t: '12:00', alarms: 8 }, { t: '13:00', alarms: 6 },
  ],
  systemLoad: [
    { t: '08:00', load: 54 }, { t: '09:00', load: 62 }, { t: '10:00', load: 71 }, { t: '11:00', load: 68 }, { t: '12:00', load: 79 }, { t: '13:00', load: 74 },
  ],
  stressTrend: [
    { t: '08:00', stress: 20 }, { t: '09:00', stress: 28 }, { t: '10:00', stress: 42 }, { t: '11:00', stress: 55 }, { t: '12:00', stress: 69 }, { t: '13:00', stress: 60 },
  ],
  categories: [
    { name: 'Thermal', value: 29 }, { name: 'Mechanical', value: 25 }, { name: 'Electrical', value: 20 }, { name: 'Comms', value: 14 }, { name: 'Safety', value: 12 },
  ],
};
