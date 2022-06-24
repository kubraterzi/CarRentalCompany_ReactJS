export const filterBySearchBar = (keys, data, filteredSearch) => {
  return data.filter(
    (item) =>
      keys.some((key) =>
        item[key]?.toString().toLowerCase().includes(filteredSearch)
      ) // satırlarca or sorgusu yazmak yerine filtrelerken olabilecekleri listeleyen method some metodudur.
  );
};
