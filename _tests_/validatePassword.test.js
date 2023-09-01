/* eslint-disable no-undef */
const { validatePassword } = require('../utils/utils')

test('validatePassword - Mot de passe valide', () => {
  const password = 'Password123!'
  expect(validatePassword(password)).toBe(true)
})

test('validatePassword - Mot de passe trop court', () => {
  const password = 'Pwd354!'
  expect(validatePassword(password)).toBe(false)
})

test('validatePassword - Mot de passe sans caractère spécial', () => {
  const password = 'test123'
  expect(validatePassword(password)).toBe(false)
})

test('validatePassword - Mot de passe sans chiffre', () => {
  const password = 'Test!'
  expect(validatePassword(password)).toBe(false)
})

test('validatePassword - Mot de passe sans lettre', () => {
  const password = '202020202@'
  expect(validatePassword(password)).toBe(false)
})
