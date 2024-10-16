// Higher order array

const a=[1,4,3,2,5,5]
for (const i of a) {
    console.log(i)
}

const str="Hello SAI"
for (const i of str) {
    console.log(i)
    
}

// Map

const map=new Map()// hold key-value
// unique value
map.set('IN',"India")
map.set('EN',"England")
map.set('PK',"Pakistan")
console.log(map)
for (const [key,value] of map) {
    console.log(key,"-",value)
    
}



const obj={
    "1":"NFS",
    "2":"Haricane",
    "3":"Call Of Duty"
}
// for in obj
for (const i in obj) {
    console.log(obj[i])//not working
    
}

// for in for array
for (const key in a) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = a[key];
        console.log(element )
        
    }
}