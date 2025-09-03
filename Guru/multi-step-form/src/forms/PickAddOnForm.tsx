import React from "react";
import FormTitle from "../components/FormTitle";
import { useFormik } from "formik";
import { AddOnType, addOnItems } from "../components/data/data";
import { useStepStore } from "../store/stepStore";
import StepBtns from "../components/StepBtns";

const PickAddOnForm = () => {
  const { formData, updateFormData, increaseStep } = useStepStore();
  const formik = useFormik<{
    addOns: string[];
  }>({
    initialValues: { addOns: [] },
    onSubmit: (values) => {
      const selectedAddOns = values.addOns.map((addOn) => {
        const addOnItem = addOnItems.find((item) => item.addOn === addOn);
        return {
          addOn: addOnItem?.addOn || "",
          price: addOnItem?.[formData.billingTime] || 0,
        };
      });

      updateFormData({
        addOns: selectedAddOns,
      });
      increaseStep();
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      formik.setFieldValue("addOns", [...formik.values.addOns, value]);
    } else {
      formik.setFieldValue(
        "addOns",
        formik.values.addOns.filter((item) => item !== value)
      );
    }
  };

  return (
    <div className="relative -top-9 mx-auto h-full w-[90%] rounded-lg bg-white px-6 py-8 shadow-md lg:top-0 lg:mx-0 lg:w-auto lg:bg-none lg:p-0 lg:shadow-none">
      <form
        className="flex size-full flex-col"
        onSubmit={formik.handleSubmit} // ensure the form submits here
      >
        <FormTitle
          title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
        />
        <div className="mt-5 flex flex-col gap-6 lg:mt-10">
          <fieldset className="flex flex-col gap-4">
            {addOnItems.map((item) => (
              <label
                key={item.addOn}
                className={`border-form-grey hover:border-form-purple flex cursor-pointer items-center justify-between rounded-md border px-4 py-3 transition lg:px-6 lg:py-4 ${
                  formik.values.addOns.includes(item.addOn)
                    ? "bg-form-very-light-grey border-form-purple"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="accent-form-purple group border-form-grey checked:bg-form-purple relative size-5 appearance-none rounded-md border p-1 checked:border-0"
                      name="addOns"
                      checked={formik.values.addOns.includes(item.addOn)}
                      value={item.addOn}
                      onChange={handleChange}
                    />
                    <img
                      className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2"
                      src="/assets/images/icon-checkmark.svg"
                      alt="icon check"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="lg:text-regular text-form-denim text-sm font-medium">
                      {item.addOn}
                    </span>
                    <span className="text-form-grey text-xs lg:text-sm">
                      {item.addOnDesc}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-form-purple text-sm">
                    {"+$" +
                      item[formData?.billingTime as keyof AddOnType] +
                      "/"}
                    {formData?.billingTime === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
              </label>
            ))}
          </fieldset>
        </div>
        <StepBtns />
      </form>
    </div>
  );
};

export default PickAddOnForm;
