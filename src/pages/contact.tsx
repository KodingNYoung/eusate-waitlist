import {
  ArrowDown,
  LocationIcon,
  PhoneIcon,
  SendIcon,
  SmsIcon,
} from "@/assets/icons";
import AutoResizingTextarea from "@/components/shared/atoms/AutoResizingTextarea";
import GradientBackground from "@/components/shared/atoms/GradientBackground";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Input from "@/components/shared/molecules/Input";
import AppDropdown from "@/components/shared/molecules/Popups/AppDropdown";
import Footer from "@/components/shared/organisms/footer";
import { SOCIAL_LINKS } from "@/components/shared/organisms/footer/utils";
import Navbar from "@/components/shared/organisms/navbar";
import { PageHeader } from "@/components/shared/organisms/PageHeader";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant="yellow" className="absolute mx-4" />
      <main className="pt-[88px] px-4 space-y-8">
        <div className="container flex justify-between mx-auto pt-20 max-w-[80%]">
          {/* CONTACT INFO */}
          <section className="space-y-24">
            <PageHeader
              chipLabel="Contact us"
              title="Get in touch."
              description="Do you have questions? We'd love to hear from you"
            />
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-x-4">
                  <span>{SmsIcon}</span>
                  <Typography variant="semibold-lg">Email:</Typography>
                  <span className="text-medium-base text-gray-700">
                    info@eusate.com
                  </span>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>{PhoneIcon}</span>
                  <Typography variant="semibold-lg">Tele:</Typography>
                  <span className="text-medium-base text-gray-700">
                    +23490432761840
                  </span>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>{LocationIcon}</span>
                  <Typography variant="semibold-lg">Address:</Typography>
                  <span className="text-medium-base text-gray-700">
                    1 Rockview Close, Oba-ile Akure
                  </span>
                </div>
              </div>

              {/* SOCIAL LINK */}
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(({ id, icon, link }) => (
                  <Button
                    key={id}
                    href={link}
                    variant="tetiary"
                    classNames={{ root: "p-3 bg-gray-50" }}
                  >
                    <span className="stroke-gray-30 fill-[#98A2B3]">
                      {icon}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* MESSAGE FORM */}
          <section className="min-w-[520px] space-y-8 bg-black text-white py-6 px-8 rounded-3xl">
            <div className="flex items-center gap-4">
              <span>{SendIcon}</span>
              <Typography variant="medium-lg" className="text-gray-200">
                Send us a message
              </Typography>
            </div>
            <form className="grid gap-4">
              <Input
                name="full-name"
                classNames={{
                  input:
                    "!bg-gray-900 text-white placeholder:text-gray-500 placeholder:text-medium-sm",
                  inputContainer: "before:hidden",
                }}
                placeholder="Full name"
              />
              <Input
                name="email"
                classNames={{
                  input: "!bg-gray-900 text-white placeholder:text-gray-500",
                  inputContainer: "before:hidden",
                }}
                placeholder="Email address"
              />
              <AppDropdown
                triggerEl={
                  <Typography variant="medium-sm" className="text-gray-500">
                    Reason
                  </Typography>
                }
                triggerBtnProps={{
                  endContent: (
                    <span className="stroke-gray-500">{ArrowDown}</span>
                  ),
                  className: "flex justify-between p-4 !bg-gray-900",
                }}
              />
              <AutoResizingTextarea
                maxRows={30}
                minRows={10}
                classNames={{
                  inputWrapper: "!bg-gray-900",
                  input:
                    "text-white !text-regular-sm placeholder:text-gray-500",
                }}
                placeholder="Type your message"
              />
              <Button
                variant="outlined"
                className="py-4"
                classNames={{ label: "text-semibold-base" }}
              >
                Submit
              </Button>
            </form>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;
