export const showIf = condition => show => {
  if (condition) return show();
  return null;
};

export const hideIf = condition => show => {
  if (condition === false) return show();
  return null;
};