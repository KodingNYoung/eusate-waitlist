import Input from "@/components/shared/molecules/Input";
import AppDropdown from "@/components/shared/molecules/Popups/AppDropdown";
import AutoResizingTextarea from "@/components/shared/atoms/AutoResizingTextarea";
import { ArrowDown, SendYellowIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils/schemas";
import { ContactForm } from "@/utils/types";

export const FormSection = () => {
  const { register } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <section className="w-full md:max-w-[520px] space-y-8 bg-black text-white py-6 px-4 md:px-8 rounded-3xl">
      <div className="flex items-center gap-4">
        <span>{SendYellowIcon}</span>
        <Typography variant="medium-lg" className="text-gray-200">
          Send us a message
        </Typography>
      </div>
      <form className="grid gap-2 md:gap-4">
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
        <AppDropdown
          triggerEl={
            <Typography variant="medium-sm" className="text-gray-500">
              Reason
            </Typography>
          }
          classNames={{ content: "bg-white rounded-lg w-full" }}
          triggerBtnProps={{
            endContent: <span className="stroke-gray-500">{ArrowDown}</span>,
            className: "flex justify-between p-4 !bg-gray-900",
          }}
        />
        <AutoResizingTextarea
          {...register("message")}
          maxRows={30}
          minRows={10}
          classNames={{
            inputWrapper: "!bg-gray-900",
            input: "text-white !text-regular-sm placeholder:text-gray-500",
          }}
          placeholder="Type your message"
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
