// return the highest rating 
//
function highestRating(arr) {
    const objIdInfo = {}
    let highestRatingAndId = arr[0]

    for (let i = 0; i < arr.length; i++) {
        const currId = arr[i][0];
        const currRating = arr[i][1];

        if (!objIdInfo[currId]) {
            objIdInfo[currId] = { count: 0, sum: 0 };
        }
        objIdInfo[currId].count++;
        objIdInfo[currId].sum += currRating;
        let currAvg = objIdInfo[currId].sum / objIdInfo[currId].count
        if (currAvg > highestRatingAndId[1] || (currAvg >= highestRatingAndId[1] && currId < highestRatingAndId[0])) {
            highestRatingAndId = [currId, currAvg]
        }
    }

    return highestRatingAndId
}


console.log(highestRating([[12, 4], [14, 3], [14, 2], [15, 5]])) // 15