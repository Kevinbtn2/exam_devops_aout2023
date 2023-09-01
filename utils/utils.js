module.exports.validatePassword = (password) => {
  // mot de passe contient au moins 8 caractères
  if (password.length < 8) {
    return false
  }

  // au moins un caractère spécial
  const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/
  if (!specialCharacterRegex.test(password)) {
    return false
  }

  // au moins un chiffre et une lettre
  const digitRegex = /\d/
  const letterRegex = /[a-zA-Z]/
  if (!digitRegex.test(password) || !letterRegex.test(password)) {
    return false
  }

  return true
}
