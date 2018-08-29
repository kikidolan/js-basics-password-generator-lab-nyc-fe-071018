window.addEventListener("load", () => {
  //start your code here
  let outputResult = document.querySelector("output")
  let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
  let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let numbers = "0123456789".split('')
  let specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~".split('')
  
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let input = document.getElementById('passwordLength')
    let passwordLength = input.value
    if (passwordLength < 4) {
      passwordLength = 4
    }
    let newPassword = ""
    for (let i = 0; i < passwordLength;) {
      if (i < passwordLength) {
        newPassword += lowercaseCharacters[
        Math.floor(Math.random() * lowercaseCharacters.length)
        ]
        i++
      }
      if (i < passwordLength) {
        newPassword += uppercaseCharacters[
        Math.floor(Math.random() * uppercaseCharacters.length)
        ]
        i++ 
        }
      if (i < passwordLength) {
      newPassword += numbers[
        Math.floor(Math.random() * numbers.length)
        ]
        i++ 
        }
      if (i < passwordLength) {
        newPassword += specialCharacters[
        Math.floor(Math.random() * specialCharacters.length)
        ]
        i++ 
        }
    }
    
    outputResult.innerHTML = newPassword
  })
  
});
