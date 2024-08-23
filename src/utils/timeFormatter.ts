/**
 * Преобразование даты из формата String в строку 'hh:mm'
 * @param timestamp Дата
 */
export const formatTimestampToTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
