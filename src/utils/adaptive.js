export const priorityRank = { Critical: 4, High: 3, Medium: 2, Low: 1 };

export const getVisibleAlarms = (alarms, mode) => {
  const sorted = [...alarms].sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority]);
  if (mode === 'medium') return sorted.slice(0, 5);
  if (mode === 'overload') {
    const critical = sorted.filter((a) => a.priority === 'Critical');
    return (critical.length ? critical : sorted).slice(0, 2);
  }
  return sorted;
};

export const healthFromSensors = (sensors) => {
  const score = sensors.reduce((acc, s) => acc + (s.value <= s.threshold ? 100 : 70), 0) / sensors.length;
  return Math.round(score);
};
