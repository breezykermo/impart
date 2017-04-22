import t from 'tcomb-form-native'

export const Form = t.form.Form

export const PhoneNumber = t.refinement(t.String, n => (
  /^\d+$/.test(n) && n.length >= 9
))

export const Profile = t.struct({
  name: t.String,
  email: t.String,
  phoneNo: PhoneNumber
})

export default Form
