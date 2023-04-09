export const multiply = (a, b) => a * b;

export const filterByAirline = async (data, airlineCode) => {
  return data.filter(item => {
    return item.airlineCode === airlineCode;
  });
};
