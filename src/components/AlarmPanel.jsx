import { motion } from 'framer-motion';

const colors = {
  Critical: 'text-red-300 border-red-400/70 bg-red-950/20',
  High: 'text-orange-300 border-orange-400/60 bg-orange-950/20',
  Medium: 'text-yellow-300 border-yellow-400/60 bg-yellow-950/20',
  Low: 'text-emerald-300 border-emerald-400/50 bg-emerald-950/20',
};

export default function AlarmPanel({ alarms, onPriorityChange, expanded }) {
  return (
    <section className={`rounded-2xl border border-slate-700 bg-slate-900/70 p-3 ${expanded ? 'md:col-span-2' : ''}`}>
      <h2 className="mb-3 text-lg font-semibold text-slate-100">Alarm Prioritization Center</h2>
      <div className="space-y-2">
        {alarms.map((alarm) => {
          const isCritical = alarm.priority === 'Critical';
          return (
            <motion.div key={alarm.id} layout className={`rounded-lg border p-3 ${colors[alarm.priority]} ${isCritical ? 'animate-pulse' : ''}`}>
              <div className="grid gap-2 md:grid-cols-[1.6fr,0.8fr,0.8fr,1fr,1.4fr] md:items-center">
                <p className="font-semibold">{alarm.name}</p>
                <p>{alarm.severity}</p>
                <select className="rounded border border-slate-700 bg-slate-950 px-2 py-1 text-xs" value={alarm.priority} onChange={(e) => onPriorityChange(alarm.id, e.target.value)}>
                  {['Critical', 'High', 'Medium', 'Low'].map((p) => <option key={p}>{p}</option>)}
                </select>
                <p className="text-xs">{alarm.timestamp}</p>
                <p className="text-xs">{alarm.action}</p>
              </div>
              {isCritical && <p className="mt-2 text-sm font-bold text-red-200">⚠ {alarm.name} – {alarm.action}</p>}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
