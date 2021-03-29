function circumferenceOfCircle () {
  let circleDiameter = parseInt(prompt('Please enter the diameter of circle:'))
  let circumferenceOfCircle = (circleDiameter / 2) * Math.PI * 2
  document.getElementById('circumference_status').innerHTML = 'The circumference of the circle is ' + circumferenceOfCircle
}
function areaOfCircle () {
  let circleDiameter = parseInt(prompt('Please enter the diameter of circle:'))
  let areaOfCircle = Math.pow((circleDiameter / 2), 2) * Math.PI
  document.getElementById('area_status').innerHTML = 'The area of the circle is ' + areaOfCircle
}
