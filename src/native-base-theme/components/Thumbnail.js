export default () => {
  const thumbnailTheme = {
    '.square': {
      borderRadius: 0,
      '.small': {
        width: 36,
        height: 36,
        borderRadius: 0,
      },
      '.large': {
        width: 80,
        height: 80,
        borderRadius: 0,
      },
    },
    '.small': {
      width: 36,
      height: 36,
      borderRadius: 18,
      '.square': {
        borderRadius: 0,
      },
    },
    '.large': {
      width: 80,
      height: 80,
      borderRadius: 40,
      '.square': {
        borderRadius: 0,
      },
    },
    width: 40,
    height: 40,
    borderRadius: 20,
  };

  return thumbnailTheme;
};
