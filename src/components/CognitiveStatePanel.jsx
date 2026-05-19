export default function CognitiveStatePanel({ mode, setMode, fullscreen, setFullscreen, sound, setSound }) {
  const modes = [
    ['normal', 'Normal'],
    ['medium', 'Medium Stress'],
    ['overload', 'Overload'],
  ];
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900/70 p-3">
      <h2 className="mb-3 text-lg font-semibold text-slate-100">Operator Cognitive State</h2>
      <div className="flex flex-wrap gap-2">
        {modes.map(([key, label]) => (
          <button key={key} onClick={() => setMode(key)} className={`rounded-lg px-3 py-2 text-sm ${mode === key ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-200'}`}>{label}</button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <button onClick={() => setFullscreen((v) => !v)} className="rounded bg-slate-800 px-2 py-1 text-cyan-200">Emergency Fullscreen {fullscreen ? 'ON' : 'OFF'}</button>
        <button onClick={() => setSound((v) => !v)} className="rounded bg-slate-800 px-2 py-1 text-cyan-200">Voice Alert {sound ? 'ON' : 'OFF'}</button>
      </div>
    </section>
  );
}
