/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [p1,p2,p3] = points;
    const [x1,y1] = p1;
    const [x2,y2] = p2;
    const [x3,y3] = p3;

    if ((y2 - y1) * (x3 - x2) === (y3 - y2) * (x2 - x1)) {
        return false;
    }
  return true;

};