import { AlertTriangle, Wifi, ShieldCheck } from 'lucide-react';

export default function Header({ now, connected, health, aiConfidence }) {
  return (
    <header className="rounded-2xl border border-cyan-400/30 bg-slate-900/70 p-4 shadow-neon backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Industrial AI Control Room</p>
          <h1 className="text-xl font-bold text-slate-100 md:text-2xl">Cognitive-Aware AI Alarm Prioritization & Adaptive HMI System</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="chip"><ShieldCheck size={14} /> Health {health}%</span>
          <span className="chip"><Wifi size={14} className={connected ? 'text-emerald-300' : 'text-red-400'} /> {connected ? 'Connected' : 'Offline'}</span>
          <span className="chip">AI Confidence {aiConfidence}%</span>
          <span className="chip text-red-300"><AlertTriangle size={14} /> Emergency Ready</span>
          <span className="text-slate-300">{now.toLocaleString()}</span>
        </div>
      </div>
    </header>
  );
}
