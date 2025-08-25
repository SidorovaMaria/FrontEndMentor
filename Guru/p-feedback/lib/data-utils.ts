export const getCountedPlannedFeedbacks = (data: ProductRequest[]) => {
  const filtered = data.filter((item) => item.status !== "suggestion");
  const reduce = filtered.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  return reduce;
};
export const getStatusColor = (status: string) => {
  switch (status) {
    case "planned":
      return "#F49F85";
    case "in-progress":
      return "#AD1FEA";
    case "live":
      return "#62BCFA";
    default:
      return "#3A4374";
  }
};
export const getAllCategoriesRequests = (data: ProductRequest[]) => {
  const categories = data.flatMap((item) => item.category);
  return Array.from(new Set(categories));
};
