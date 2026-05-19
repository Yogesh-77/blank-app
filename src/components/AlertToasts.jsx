import { AnimatePresence, motion } from 'framer-motion';

export default function AlertToasts({ alerts }) {
  return (
    <div className="fixed right-4 top-4 z-50 space-y-2">
      <AnimatePresence>
        {alerts.map((a) => (
          <motion.div key={a.id} initial={{ x: 180, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 180, opacity: 0 }} className="max-w-xs rounded border border-red-400/60 bg-slate-950/90 p-3 text-sm text-red-200 shadow-danger">
            {a.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
