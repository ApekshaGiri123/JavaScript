
//  by push method ,whole arr2 behave as a element 
const marval_heros=["thor","IronMan","spiderMan"]
const dc_hero=["superman","batman","flash"]
// marval_heros.push(dc_hero)
// console.log(marval_heros)    //[ 'thor', 'IronMan', 'spiderMan', [ 'superman', 'batman', 'flash' ] ]







// by concat() method  it concat each element 
// const all_hero=marval_heros.concat(dc_hero)
// console.log(all_hero)  //[ 'thor', 'IronMan', 'spiderMan', 'superman', 'batman', 'flash' ]




// spread() method-
const all=[...dc_hero,...marval_heros,...dc_hero]
console.log(all)
// [
//     'superman', 'batman',
//     'flash',    'thor',
//     'IronMan',  'spiderMan',
//     'superman', 'batman',
//     'flash'
//   ]




// flat(depth)
const ex=[1,2,3,[4,3,5],[5,8,[4,3],[4,6],5],6]
const ans=ex.flat(Infinity)
console.log(ans)




// isArray()- tell us is given ia array or not

console.log(Array.isArray("hello"))


// from()- it convert o array
console.log(Array.from("hello"))

console.log(Array.from({namr:"ABC"}))// it always give us [] bcoz we have to tell make array that from keys or value

// off()
console.log(Array.of(2,5,6,))