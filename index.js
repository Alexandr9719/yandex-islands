var arr = [
   [1,0,1],
   [0,1,0],
   [1,0,1]
];
var arr1 = [
	[1,0,1],
	[1,0,0],
	[1,1,1]
];
function islands(arr){
  var result = 0;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[i][j] !== 0){
        result++;
        deleteIsland(i, j);
      }
    }
  }
  
  function deleteIsland(i, j){
    arr[i][j] = 0;
    console.log(arr);
    if (i+1 < arr.length && arr[i+1][j] == 1)
        deleteIsland(i + 1, j);
    if (i-1 >= 0 && arr[i-1][j] == 1)
        deleteIsland(i-1, j);
    if (j-1 >= 0 && arr[i][j-1] == 1)
        deleteIsland(i, j-1);
    if (j+1 < arr.length && arr[i][j+1] == 1)
        deleteIsland(i, j+1);
  }

  return result;
}
console.log("Массив 1");
console.log(...arr);
console.log("Ответ:");
console.log(islands(arr));
console.log("///////////")

console.log("Массив 2");
console.log(...arr1);
console.log("Ответ:");
console.log(islands(arr1));
console.log("///////////")