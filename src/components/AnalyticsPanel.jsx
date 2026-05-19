import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const pieColors = ['#22d3ee', '#f97316', '#eab308', '#10b981', '#a855f7'];

export default function AnalyticsPanel({ analytics, hidden }) {
  if (hidden) return null;
  return (
    <section className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-3 lg:grid-cols-2">
      {[['Alarm Frequency', analytics.alarmFrequency, 'alarms', '#f97316'], ['System Load', analytics.systemLoad, 'load', '#22d3ee'], ['Stress Trend', analytics.stressTrend, 'stress', '#ef4444']].map(([title, data, key, stroke]) => (
        <div key={title} className="h-52 rounded-lg border border-slate-800 bg-slate-950/70 p-2">
          <p className="text-sm text-slate-200">{title}</p>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={data}><XAxis dataKey="t" tick={{ fill: '#94a3b8', fontSize: 10 }} /><Tooltip /><Area type="monotone" dataKey={key} stroke={stroke} fill={stroke} fillOpacity={0.2} /></AreaChart>
          </ResponsiveContainer>
        </div>
      ))}
      <div className="h-52 rounded-lg border border-slate-800 bg-slate-950/70 p-2">
        <p className="text-sm text-slate-200">Alarm Category Mix</p>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart><Pie data={analytics.categories} dataKey="value" nameKey="name" outerRadius={80} label>{analytics.categories.map((_, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}</Pie></PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
