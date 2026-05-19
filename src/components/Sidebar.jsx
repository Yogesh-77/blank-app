import { LayoutDashboard, Siren, Brain, Activity, WandSparkles, Logs, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [LayoutDashboard, Siren, Brain, Activity, WandSparkles, Logs, Settings];

export default function Sidebar({ items }) {
  return (
    <aside className="rounded-2xl border border-slate-700 bg-slate-900/70 p-3">
      <nav className="space-y-2">
        {items.map((item, index) => {
          const Icon = icons[index] || LayoutDashboard;
          return (
            <motion.button
              key={item}
              whileHover={{ x: 4, scale: 1.02 }}
              className="flex w-full items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2 text-left text-sm text-slate-200 hover:border-cyan-400/50"
            >
              <Icon size={16} className="text-cyan-300" />
              {item}
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}
