import { applyToBeta } from "@/actions";
import { ArrowRightIcon, SuccessCheckIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Input from "@/components/shared/molecules/Input";
import Select from "@/components/shared/molecules/Select";
import { APPLICATION_FORM_FIELDS, betaFormSchema } from "@/utils/constants";
import { useValidation } from "@/utils/hooks";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";

const ApplyForm = () => {
  const { push } = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { errors, hasErrors, markFieldTouched } = useValidation(
    betaFormSchema,
    formRef
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    const formdata = new FormData(e.currentTarget);
    const response = await applyToBeta(formdata);
    setShowSuccess(response.success);
    setSubmitting(false);
    (e.target as HTMLFormElement)?.reset();
  };

  return (
    <>
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
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed z-2 top-0 left-0 w-full h-full flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute w-full h-full backdrop-blur-xlarge bg-black-20"
              onClick={() => setShowSuccess(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative z-2 bg-white p-8 flex flex-col gap-8 rounded-x20 w-[488px] max-w-full"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                {SuccessCheckIcon}
                <Typography className="text-bold-xl mt-4 text-gray-900">
                  Thank you! Your response has been submitted.
                </Typography>
                <Typography className="text-gray-500 text-regular-sm sm:text-regular-base">
                  We&apos;ll review your information within 72 hours and send you a
                  personalized follow-up with next steps. Check your inbox -
                  we&apos;re excited to show you how EUSATE can transform your
                  customer support.
                </Typography>
              </div>
              <Button
                className="gradient py-4.5"
                onClick={() => {
                  setShowSuccess(false);
                  push("/");
                }}
              >
                OK, Got it
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplyForm;
