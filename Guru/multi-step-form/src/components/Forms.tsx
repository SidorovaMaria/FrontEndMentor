import React from 'react'
import PersonalInfoForm from '../forms/PersonalInfoForm';
import SelectYourPlanForm from '../forms/SelectYourPlanForm';
import PickAddOnForm from '../forms/PickAddOnForm';
import FinishingUpForm from '../forms/FinishingUpForm'
import { useStepStore } from '../store/stepStore';
const Forms = () => {
    const { step } = useStepStore();
  
    switch (step) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <SelectYourPlanForm />;
      case 3:
        return <PickAddOnForm />;
      case 4:
        return <FinishingUpForm />;
      default:
        return;
    }
  };
  

export default Forms