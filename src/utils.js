export const formatTotalTime = (totalMinutes) => {
    const days = Math.floor(totalMinutes / (8 * 60));
    const hours = Math.floor((totalMinutes % (8 * 60)) / 60);
    const minutes = totalMinutes % 60;
    const parts = [];
    if (days > 0) parts.push(`${days} Day${days !== 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} Hour${hours !== 1 ? 's' : ''}`);
    if (minutes > 0) parts.push(`${minutes} Minute${minutes !== 1 ? 's' : ''}`);
    return parts.join(', ');
};

export const convertToMinutes = (timeString) => {
    const regex = /(\d+)([hmd])/g;
    let totalMinutes = 0;
    let match;
    while ((match = regex.exec(timeString)) !== null) {
      const value = parseInt(match[1]);
      const unit = match[2];
      if (unit === 'h') totalMinutes += value * 60;
      else if (unit === 'm') totalMinutes += value;
      else if (unit === 'd') totalMinutes += value * 8 * 60; // 1 day = 8 hours
    }
    return totalMinutes;
  };