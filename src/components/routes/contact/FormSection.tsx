import Input from "@/components/shared/molecules/Input";
import AutoResizingTextarea from "@/components/shared/atoms/AutoResizingTextarea";
import { SendYellowIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils/schemas";
import { ContactForm } from "@/utils/types";
import { REASON_OPTIONS } from "./utils";
import Select from "@/components/shared/molecules/Select";

export const FormSection = () => {
  const { register, control } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <section className="w-full md:max-w-[520px] grid gap-y-4 md:gap-y-6 bg-black text-white py-6 px-4 md:px-8 rounded-3xl">
      <div className="flex items-center gap-4">
        <span>{SendYellowIcon}</span>
        <Typography variant="medium-lg" className="text-gray-200">
          Send us a message
        </Typography>
      </div>
      <form className="grid gap-4 md:gap-6">
        <Input
          {...register("firstname")}
          name="full-name"
          classNames={{
            input:
              "!bg-gray-900 text-white placeholder:text-gray-500 placeholder:text-medium-sm",
            inputContainer: "before:hidden !mt-0 !mb-0",
          }}
          placeholder="Full name"
        />
        <Input
          {...register("email")}
          name="email"
          classNames={{
            input: "!bg-gray-900 text-white placeholder:text-gray-500",
            inputContainer: "before:hidden !mt-0 !mb-0",
          }}
          placeholder="Email address"
        />
        <Select
          name="reason"
          placeholder="Reason"
          options={REASON_OPTIONS}
          classNames={{
            trigger: "!bg-gray-500",
            placeholder: "!bg-gray-900 text-white",
            icon: "!stroke-gray-500",
            menu: { root: "!bg-gray-700", item: "text-gray-100" },
          }}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <AutoResizingTextarea
              onChange={field.onChange}
              value={field.value}
              maxRows={30}
              minRows={10}
              classNames={{
                inputWrapper: "!bg-gray-900",
                input: "text-white !text-regular-sm placeholder:text-gray-500",
              }}
              placeholder="Type your message"
            />
          )}
        />
        <Button
          size="sm"
          variant="outlined"
          className="py-4"
          classNames={{ label: "text-semibold-base" }}
        >
          Submit message
        </Button>
      </form>
    </section>
  );
};
