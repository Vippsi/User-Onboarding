import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import Member from './Member'
import formSchema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'

const initialMember = [
  {
    name: '',
    email: '',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  checkBoxes: {
    tos: false,
  }
  
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialDisabled = true

 //STYLES//

 

function App() {

  const [members, setMembers] = useState(initialMember)
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formErrors, setFormErrors] =useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const [users, setUsers] =useState([])


const onInputChange = event => {
  const {name}  = event.target
  const {value} = event.target


  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors, [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors, [name]: err.errors[0]
      })
    })

  setFormValues({...formValues, [name]: value})
}

const onCheckboxChange = evt => {
  const { name } = evt.target
  const { checked } = evt.target

  setFormValues({
    ...formValues,
    checkBoxes:{
      ...formValues.checkBoxes, [name]: checked,
    } 
  })
}

useEffect(()=> {
  formSchema.isValid(formValues)
  .then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

const postNewMember = newMember => {
  axios.post('https://reqres.in/api/users', newMember)
  .then(res=> {
    setUsers([res.data, ...users])
    setMembers([res.data, ...members])
    console.log(res.data)
  })
  .catch(err => {
    console.log({err})
  })
  .finally(() => {
    setFormValues(initialFormValues)
  })
}


const onSubmit = event => {
  event.preventDefault()

const newMember = {
  name: formValues.name.trim(),
  email: formValues.email.trim(),
  password: formValues.password.trim(),
  tos: formValues.tos,
}

postNewMember(newMember)
  // const newMember = { ...formValues}
  // setMembers([newMember, ...members])
  // setFormValues(initialFormValues)
}


 



  return (
    <div className="App">
      <Form 
      values = {formValues}
      onInputChange={onInputChange}
      onSubmit = {onSubmit}
      errors={formErrors}
      disabled={disabled}
      onCheckboxChange={onCheckboxChange}/>

    <pre>
      {
        users.map(user => {
          console.log(user)
          return JSON.stringify(user)
        })
      }
  </pre>
    {
      members.map(member => {
        return (
          <Member info={member}/>
        )
      })
    }
    </div>
  );
}

export default App;
