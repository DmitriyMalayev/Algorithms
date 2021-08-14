function shapeArea(n) {
  let area = 1
  for (var i = 1; i < n; i++) {
    area += 4 * i
  }
  return area
}

function makeArrayConsecutive2(statues) {
  statues.sort((a, b => {
    return a - b
  }))

  let min = statues[0]
  let max = statues[statues.length - 1]
  let count = 0

  for (let i = min; i < max; i++){
    if (statues.indexOf(i) === -1) {  //index of element or -1
      count++
    }
  }
  return count
}


function reverse(str) {
  return str.split("").reverse().join("")
}

function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("")
  return parseInt(reversed * Math.sign(n))
}

function palindrome(str) {
  
}


