export const hasUniqueValues = (arr: any[]) => {
  return arr.length === new Set(arr).size;
};
