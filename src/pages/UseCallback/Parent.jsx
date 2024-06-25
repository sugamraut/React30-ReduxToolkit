import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'

const Parent = () => {
    const [salary,setSalary] = useState(2000)
    const [age,setAge] = useState(22)
    const incrementAge = useCallback(()=>{
        setAge(age + 5)
    },[age])
    const increaseSalary = useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])
  return (
    <div>
        <Title /> 
        <Display text="age" displayValue={age} />
        <Button content='Increase Age' handleClick={incrementAge} />
        <Display text="salary" displayValue={salary} />
        <Button content='Increase Salary' handleClick={increaseSalary} />

    </div>
  )
}

export default Parent