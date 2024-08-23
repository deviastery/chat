/**
 * Преобразование даты из формата String в строку 'dd.mm.yyyy'
 * @param timestamp Дата
 */
export const formatTimestampToDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
