const paginate = (data, items) => {
  const itemsPerPage = items;
  const noOfPages = Math.ceil(data.length / itemsPerPage);

  const newArray = Array.from({ length: noOfPages }, (arr, index) => {
    const startingIndex = index * itemsPerPage;
    return data.slice(startingIndex, startingIndex + itemsPerPage);
  });
  return newArray;
};

export default paginate;
