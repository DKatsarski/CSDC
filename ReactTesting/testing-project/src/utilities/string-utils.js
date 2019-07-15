function lowerCaseAndSort(arrData) {
    const sorted = arrData

        .map(country => country.toLocaleLowerCase())
        .sort((country, nextCountry) => {
            if (country < nextCountry) {
                return 1;
            } else if (country > nextCountry) {
                return -1;
            }
            return 0;
        });
   return sorted;
}

export default lowerCaseAndSort;