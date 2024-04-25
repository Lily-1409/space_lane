import Pristine from 'pristinejs'

const testForm = document.querySelector('#example-form')
const pristine = new Pristine(testForm)

testForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const isValid = pristine.validate()

  console.log(isValid)
})
