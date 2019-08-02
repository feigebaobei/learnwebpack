import _ from 'lodash'
import './style.css'
import Icon from './first.jpg'
import students from './students.json'
import Data from './data.xml'
console.log(Data)
function component () {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  const myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)
  generateStudent(element)
  return element
}
function generateStudent (parent) {
  let ul = document.createElement('ul')
  parent.appendChild(students.reduce((res, cur) => {
    let li = document.createElement('li')
    li.innerHTML = `${cur.name} ${cur.age}`
    res.appendChild(li)
    return res
  }, ul))
}
document.body.appendChild(component())