const sname=['wadan' , 'yahya' , 'zohaib' , 'fayaz']

console.log(typeof(sname))

console.log(sname.toString())

var tyN=(sname.toString())

console.log(typeof(tyN))

document.write(tyN)

for(let i=0; i<sname.length; i++){
    document.write('</br>' + sname[i])
}
document.write('</br>' + sname)


// add new value in array
sname.push('hamza')
document.write('</br>' + sname)
// delete the end value
sname.pop()
document.write('</br>' + sname)

// array method
const car=["toyota" , 'bmw' , 'shorlet']
document.write('</br>' + car)

car.pop()
document.write('</br>' + car)

car.push('luxes')
document.write('</br>' + car)

car.shift()
document.write('</br>' + car)

car.unshift('nabi')
document.write('</br>' + car)

car[car.length]="noori";
document.write('</br>' + car)


// concatinate array
const stu=['asad', 'samad', 'reza'];
const stu1=['asad', 'samad', 'reza'];

console.log(stu.concat(car,stu1))

document.write('</br>');

// splicing and slicing
const fruit = ['banana' , 'Orange' , 'Apple' , 'Mango']
document.write(fruit);
document.write('</br>');

fruit.splice(1,0,"lemon",'kiwi')
// delete fruit[2]
console.log(fruit)
document.write(fruit);
document.write('</br>');

// slicing
const fruits=['banana' , 'Orange' , 'Apple' , 'Mango']
document.write(fruits);
document.write('</br>');
const sl=fruits.slice(2)
document.write(sl);
