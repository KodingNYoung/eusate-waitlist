import { applyToWaitlist } from "@/actions";
import Button from "@/components/shared/molecules/Button";
import Input from "@/components/shared/molecules/Input";
import { waitlistFormSchema } from "@/utils/constants";
import { useValidation } from "@/utils/hooks";
import { FC } from "@/utils/types";
import React, { FormEvent, useRef, useState } from "react";

const WaitlistForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { errors, hasErrors, markFieldTouched } = useValidation(
    waitlistFormSchema,
    formRef
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    const formdata = new FormData(e.currentTarget);
    const response = await applyToWaitlist(formdata);
    setShowSuccess(response.success);
    setSubmitting(false);
    (e.target as HTMLFormElement)?.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 md:items-center max-w-[488px] w-full"
    >
      <Input
        name="email"
        classNames={{
          root: "w-full",
          inputContainer:
            "before:hidden border border-[#FFFFFF26] focus-within:border-[#FFFFFF49] transition-colors duration-300",
          input:
            "!bg-[#FFFFFF0D] !text-gray-300 placeholder:text-gray-300 placehoder:text-regular-base",
        }}
        placeholder="Enter your email address"
        isError={!!errors.email}
        helperText={errors?.email}
        onChange={(e) => {
          markFieldTouched(e.currentTarget.name);
        }}
      />
      <Button
        type="submit"
        classNames={{
          root: "gradient py-4.5 px-7 min-w-[45%]",
          label: "text-semibold-sm",
        }}
        variant={showSuccess ? "success" : "primary"}
        disabled={hasErrors || showSuccess}
        loading={submitting}
      >
        {showSuccess ? "You are now on the waitlist" : "Join waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
