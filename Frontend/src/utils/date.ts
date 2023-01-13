export const getLocaleDate = (dateString: string) => {
  return new Date(dateString).toLocaleString("ko-kr");
};
