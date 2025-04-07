import React from 'react';

type FormTitleProps = {
  title: string;
  description: string;
};

const FormTitle = ({ title, description }: FormTitleProps) => {
  return (
    <div>
      <h1 className="text-form-denim text-2xl font-bold lg:text-[32px]">
        {title}
      </h1>
      <p className="text-form-grey text-regular">{description}</p>
    </div>
  );
};

export default FormTitle;
