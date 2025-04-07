import React from 'react'
import Stepper from './Stepper'
import Forms from './Forms'

const FormContainer = () => {
  return (
    <section className="relative flex w-full flex-col rounded-2xl shadow-md lg:min-h-[600px] lg:max-w-4xl lg:flex-row lg:bg-white lg:p-4">
    <Stepper/>
    <div className="w-full lg:h-auto lg:px-16 lg:py-10">
      <Forms/>
    </div>
  </section>
  )
}

export default FormContainer