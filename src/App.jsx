import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SensorCard from './components/SensorCard';
import AlarmPanel from './components/AlarmPanel';
import CognitiveStatePanel from './components/CognitiveStatePanel';
import AnalyticsPanel from './components/AnalyticsPanel';
import AlertToasts from './components/AlertToasts';
import { navItems, sensors as seedSensors, alarmData, analytics } from './mock/data';
import { getVisibleAlarms, healthFromSensors } from './utils/adaptive';

export default function App() {
  const [mode, setMode] = useState('normal');
  const [now, setNow] = useState(new Date());
  const [connected] = useState(true);
  const [alarms, setAlarms] = useState(alarmData);
  const [alerts, setAlerts] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const visibleAlarms = useMemo(() => getVisibleAlarms(alarms, mode), [alarms, mode]);
  const health = healthFromSensors(seedSensors);

  const pushAlert = (message) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message }]);
    if (sound) window.speechSynthesis?.speak(new SpeechSynthesisUtterance(message));
    setTimeout(() => setAlerts((prev) => prev.filter((a) => a.id !== id)), 3500);
  };

  const onPriorityChange = (id, priority) => {
    setAlarms((prev) => prev.map((a) => (a.id === id ? { ...a, priority } : a)));
    if (priority === 'Critical') pushAlert('Critical alarm escalated. Immediate action required.');
  };

  useEffect(() => {
    if (mode === 'overload') pushAlert('Operator overload detected. Adaptive minimal UI activated.');
  }, [mode]);

  const deemphasize = mode === 'medium' || mode === 'overload';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-3 text-slate-100 ${fullscreen && mode === 'overload' ? 'fixed inset-0 z-40 overflow-auto' : ''}`}>
      <AlertToasts alerts={alerts} />
      <div className="mx-auto grid max-w-[1700px] gap-3 lg:grid-cols-[240px,1fr]">
        <Sidebar items={navItems} />
        <main className="space-y-3">
          <Header now={now} connected={connected} health={health} aiConfidence={87} />

          <motion.section layout className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {seedSensors.map((s) => <SensorCard key={s.id} sensor={s} deemphasize={deemphasize} />)}
          </motion.section>

          <section className="grid gap-3 xl:grid-cols-3">
            <AlarmPanel alarms={visibleAlarms} onPriorityChange={onPriorityChange} expanded={mode !== 'normal'} />
            <CognitiveStatePanel mode={mode} setMode={setMode} fullscreen={fullscreen} setFullscreen={setFullscreen} sound={sound} setSound={setSound} />
          </section>

          <AnalyticsPanel analytics={analytics} hidden={mode === 'overload'} />

          {mode === 'overload' && (
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-red-500/70 bg-red-950/20 p-4 text-center shadow-danger">
              <h3 className="text-2xl font-bold text-red-200">EMERGENCY ASSIST MODE</h3>
              <p className="mt-2 text-red-100">Show only critical alarms. Reduce motor load, activate redundant cooling, and notify supervisor within 60s.</p>
            </motion.section>
          )}
        </main>
      </div>
    </div>
  );
}
