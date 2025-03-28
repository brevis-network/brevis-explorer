export const getWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return 0;
};