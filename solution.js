function solution(D) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const sums = {};
  const orderedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  for (const dateStr in D) {
    const day = days[new Date(dateStr).getDay()];
    sums[day] = (sums[day] || 0) + D[dateStr];
  }

  const result = {};

  for (let i = 0; i < orderedDays.length; i++) {
    const day = orderedDays[i];

    if (sums[day] !== undefined) {
      result[day] = sums[day];
    } else {
      const prev = orderedDays[i - 1];
      const next = orderedDays[i + 1];
      result[day] = Math.floor((result[prev] + sums[next]) / 2);
    }
  }

  return result;
}

module.exports = solution;
