function solution(age) {
    const char = ['a','b','c','d','e','f','g','h','i','j'];
    return String(age).split("").map((num) => char[num]).join("")
     
   
}