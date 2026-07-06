import Input from "@/components/shared/molecules/Input";
import { SendYellowIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils/schemas";
import { ContactForm } from "@/utils/types";
import { REASON_OPTIONS } from "./utils";
import Select from "@/components/shared/molecules/Select";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { defaultTransition } from "@/components/shared/organisms/AnimatedBlock";
import { toast } from "react-toastify";
import AutoResizingTextarea from "@/components/shared/atoms/AutoResizingTextarea";
import { sendMessage } from "@/actions";

export const FormSection = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    const res = await sendMessage(data);
    if (res?.success) {
      reset();
      toast.success("Thanks for reaching out we'd get back to you.");
    } else {
      console.log(res);
      toast.error("Sorry. Something went wrong");
    }
  };

  return (
    <motion.section
      variants={fadeUpVariants}
      transition={{ ...defaultTransition, delay: 0.3, duration: 1.2 }}
      className="w-full md:max-w-[520px] grid gap-y-4 md:gap-y-6 bg-black text-white py-6 px-4 md:px-8 rounded-3xl"
    >
      <div className="flex items-center gap-4">
        <span>{SendYellowIcon}</span>
        <Typography variant="medium-lg" className="text-gray-200">
          Send us a message
        </Typography>
      </div>
      <form className="grid gap-4 md:gap-6" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => (
            <Input
              name="firstname"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              classNames={{
                input:
                  "!bg-gray-900 text-white placeholder:text-gray-500 placeholder:text-medium-sm",
                inputContainer: "before:hidden !mt-0 !mb-0",
                helperText: "text-red-400",
              }}
              placeholder="Full name"
              isError={!!errors.firstname?.message}
              helperText={errors.firstname?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              name="email"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              classNames={{
                input: "!bg-gray-900 text-white placeholder:text-gray-500",
                inputContainer: "before:hidden !mt-0 !mb-0",
                helperText: "text-red-400",
              }}
              placeholder="Email address"
              isError={!!errors.email?.message}
              helperText={errors.firstname?.message}
            />
          )}
        />
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <Select
              name="reason"
              placeholder="Reason"
              options={REASON_OPTIONS}
              onChange={(e) => field.onChange(e as string)}
              classNames={{
                root: "!bg-gray-900",
                placeholder: "text-white !bg-gray-900",
                icon: "!stroke-gray-500",
                menu: { root: "!bg-gray-700", item: "text-gray-100" },
                helperText: "text-red-500",
              }}
              helperText={errors.firstname?.message}
            />
          )}
        />
        {errors.reason?.message && (
          <Typography variant="regular-sm" className="text-red-400">
            {errors.reason.message}
          </Typography>
        )}

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <div className="grid gap-y-2">
              <AutoResizingTextarea
                onChange={field.onChange}
                value={field.value}
                maxRows={30}
                minRows={10}
                classNames={{
                  inputWrapper: "!bg-gray-900 rounded-full",
                  input:
                    "text-white !text-regular-sm placeholder:text-gray-500",
                }}
                placeholder="Type your message"
              />
              {errors.message?.message && (
                <Typography className="text-red-500 text-[12px]">
                  {errors.message.message}
                </Typography>
              )}
            </div>
          )}
        />

        <Button
          type="submit"
          size="sm"
          variant="outlined"
          className="py-4"
          classNames={{ label: "text-semibold-base" }}
          loading={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit message"}
        </Button>
      </form>
    </motion.section>
  );
};
