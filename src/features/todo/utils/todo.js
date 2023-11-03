export const getCategoriesByPriority = (list) => {
  const highPriority = list.filter((item) => Number(item.priority) === 1);
  const mediumPriority = list.filter((item) => Number(item.priority) === 2);
  const lowPriority = list.filter((item) => Number(item.priority) === 3);

  return {
    highPriority,
    mediumPriority,
    lowPriority,
  };
};

export const getBorderClass = (priority) => {
  switch (Number(priority)) {
    case 1: {
      return "border-danger";
    }
    case 2: {
      return "border-warning";
    }
    case 3: {
      return "border-info";
    }
    default: {
      return "";
    }
  }
};
