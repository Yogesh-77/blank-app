import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function SensorCard({ sensor, deemphasize }) {
  const danger = sensor.value > sensor.threshold;
  return (
    <motion.div
      animate={danger ? { scale: [1, 1.01, 1] } : { scale: 1 }}
      transition={{ repeat: danger ? Infinity : 0, duration: 1.4 }}
      className={`rounded-xl border p-3 ${danger ? 'border-red-400/80 shadow-danger animate-flash' : 'border-cyan-500/30 shadow-neon'} ${deemphasize ? 'opacity-35' : 'opacity-100'}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm text-slate-300">{sensor.name}</p>
        <span className={`h-2 w-2 rounded-full ${danger ? 'bg-red-400' : 'bg-emerald-400'}`} />
      </div>
      <p className="text-2xl font-bold text-slate-100">{sensor.value}{sensor.unit}</p>
      <p className="text-xs text-slate-400">Threshold {sensor.threshold}{sensor.unit}</p>
      <div className="mt-2 h-14">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sensor.trend.map((v, i) => ({ i, v }))}>
            <Line type="monotone" dataKey="v" stroke={danger ? '#f87171' : '#22d3ee'} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
