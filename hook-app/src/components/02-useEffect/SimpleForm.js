import React, { useEffect, useState } from 'react'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        console.log('holi');
    },[name])

    const handleChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value })
    }

    return (
        <>
            <form >
                <input 
                    type='text'
                    name='name'
                    className='border-2 border-inherit rounded p-2'
                    placeholder='name'
                    autoComplete='of'
                    value={name}
                    onChange={handleChange}
                />
                <br />
                <input 
                    type='text'
                    name='email'
                    className='border-2 border-inherit rounded p-2'
                    placeholder='email@gmai.com'
                    autoComplete='of'
                    value={email}
                    onChange={handleChange}
                />
            </form>
        </>
    )
}

export default SimpleForm