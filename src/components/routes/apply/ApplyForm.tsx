import { apply } from "@/actions";
import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import Input from "@/components/shared/molecules/Input";
import Select from "@/components/shared/molecules/Select";
import { APPLICATION_FORM_FIELDS, validationSchema } from "@/utils/constants";
import { useValidation } from "@/utils/hooks";
import React, { FormEvent, useRef, useState } from "react";

const ApplyForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const { errors, hasErrors, markFieldTouched } = useValidation(
    validationSchema,
    formRef
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    const formdata = new FormData(e.currentTarget);
    await apply(formdata);
    setSubmitting(false);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-10"
    >
      <Input
        name="fullname"
        placeholder="Enter your full name"
        label="What is your full name?"
        isError={!!errors?.fullname}
        helperText={errors?.fullname}
        onChange={(e) => {
          markFieldTouched(e.currentTarget.name);
        }}
      />
      <Input
        name="email"
        placeholder="Enter your company email address"
        label="Email addrress"
        isError={!!errors?.email}
        helperText={errors?.email}
        onChange={(e) => {
          markFieldTouched(e.currentTarget.name);
        }}
      />
      <Input
        name="organisation_name"
        placeholder="Enter your company name"
        label="What is your company name?"
        isError={!!errors?.organisation_name}
        helperText={errors?.organisation_name}
        onChange={(e) => {
          markFieldTouched(e.currentTarget.name);
        }}
      />
      <Input
        name="role"
        placeholder="E.g. Manager, CEO, etc."
        label="What is your job role?"
        isError={!!errors?.role}
        helperText={errors?.role}
        onChange={(e) => {
          markFieldTouched(e.currentTarget.name);
        }}
      />
      <div className="h-px w-full bg-gray-50" />
      {Object.entries(APPLICATION_FORM_FIELDS).map(([key, data]) =>
        data.options.length ? (
          <Select
            label={data.label}
            name={key}
            key={key}
            options={data.options.map((option) => ({
              key: option,
              label: option,
            }))}
            placeholder={data?.placeholder}
            isError={!!errors?.[key]}
            helperText={errors?.[key]}
            onChange={() => {
              markFieldTouched(key);
            }}
          />
        ) : (
          <Input
            label={data.label}
            name={key}
            key={key}
            placeholder={data?.placeholder}
            isError={!!errors?.[key]}
            helperText={errors?.[key]}
            onChange={(e) => {
              markFieldTouched(e.currentTarget.name);
            }}
          />
        )
      )}
      <Button
        type="submit"
        className="gradient stroke-white p-4.5"
        classNames={{ label: "text-semibold-sm" }}
        endContent={ArrowRightIcon}
        loading={submitting}
        disabled={hasErrors}
      >
        Submit application
      </Button>
    </form>
  );
};

export default ApplyForm;
