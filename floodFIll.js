/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {

    const originalColor = image[sr][sc];
    if (originalColor === color) return image; // Avoid infinite recursion
  
    const stack = [[sr, sc]];
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      if (image[x][y] === originalColor) {
        image[x][y] = color;
        const adjacent = getAdjacentCoordinates(image, x, y, originalColor);
        stack.push(...adjacent);
      }
    
    }
    return image;
  }
  
  
  function getAdjacentCoordinates(image, x, y, ogColor) {
    const coordinates = [];
    const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < image.length && newY >= 0 && newY < image[0].length) {
        coordinates.push([newX, newY]);
      }
    }
  
    return coordinates;
  }
  