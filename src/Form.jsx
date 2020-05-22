import React from 'react'
import styled from 'styled-components'
import './form.css'
export default function Form(props) {

    const {
        values,
        onInputChange,
        onSubmit,
        onCheckboxChange,
        errors,
        disabled
    } = props






    return (
        <div className='formContainer'>
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a member</h2>
            </div> 

            <div className='error'>{errors.name}</div>
            <label> Name:&nbsp;
                <input
                type='text'
                placeholder='Type a name'
                name = 'name'
                value={values.name}
                onChange={onInputChange}
                />
            </label>&nbsp;

            <div className='error'>{errors.email}</div>
            <label>Email:&nbsp;
                <input
                    type='text'
                    placeholder='Type an email'
                    name = 'email'
                    value={values.email}
                    onChange={onInputChange}
                />

            </label>&nbsp;
            
            <div className='error'>{errors.password}</div>
            <label>Password:&nbsp;
                <input
                    type='text'
                    placeholder='Type a password'
                    name = 'password'
                    value={values.password}
                    onChange={onInputChange}
                />

            </label>&nbsp;

            <label>Role:&nbsp;
                <select name='role' value={values.role} onChange={onInputChange}>
                    <option value =''>Select a Role</option>
                    <option value = 'Front end'>Front end</option>
                    <option value = 'Back end'>Back end</option>
                    <option value = 'Data Science'>Data Science</option>
                    <option value = 'UIUX'>UI/UX</option>
                </select>
            </label>

            <div className='error'>{errors.tos}</div>
            <label className='tos'> Terms of Service
                <input
                type='checkbox'
                name='tos'
                checked={values.checkBoxes.tos}
                onChange={onCheckboxChange}
                />

            </label>
            <button className="submit" disabled={disabled}>Submit</button>



        </form>
        </div>
    )
}