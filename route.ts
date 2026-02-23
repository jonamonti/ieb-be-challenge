const route = (venues: number[], target: number): number[] => {
  const venueMap = new Map<number, number>();

  for (let index = 0; index < venues.length; index++) {
    const currentShares = venues[index];
    // shares that I need to meet the target
    const neededShares = target - currentShares;
    // check if we have stored neededShares in the hash map
    if (venueMap.has(neededShares)) {
      const sharesIndex = venueMap.get(neededShares);
      // return the indexes
      return [sharesIndex!, index];
    }

    // if there is no match, store the venue and its index for next lookups
    venueMap.set(currentShares, index);
  }
  // no matches -> empty array
  return [];
};

export default route;
