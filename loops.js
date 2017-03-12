function forLoop(arr) {
  for (var i=0; i<25;i++) {
    arr[i]=`'I am ${i} strange loop${i===0 ? '' : 's'}.'`
  }
  return arr;
}

function whileLoop(n) {
  while (n>0) {
    console.log(--n)
  }
  return "done";
}

function doWhileLoop(arr2) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    arr2=arr2.splice(1,1);
  } while ((arr2.length > 0) || maybeTrue());
  return arr2;
}
