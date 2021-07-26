export const showIf = condition => show => {
  if (condition) return show();
  return null;
};

export const hideIf = condition => show => {
  if (condition === false) return show();
  return null;
};

export const getTodaysDate = () => {

  const dateObj = new Date();
  const monthDate = dateObj.getMonth().toString();

  const month = `${ monthDate.length < 2 ? '0' : '' }${ monthDate }`;
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const output = year + '-' + month + '-' + day;
  return output;
};