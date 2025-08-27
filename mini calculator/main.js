 function update() {

  let sum3 = +document. querySelector('.sum3').value

  let su = +document.querySelector  ('.su').value

  let result = sum3 + sum3 * 0.12   * su

  document.querySelector('.results').textContent = result
 }

 update()
 
document.querySelector('.sum3').addEventListener('input', update)

document.querySelector('.su').addEventListener('input', update)
