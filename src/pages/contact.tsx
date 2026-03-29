import { LocationIcon, PhoneIcon, SendIcon, SmsIcon } from "@/assets/icons";
import AutoResizingTextarea from "@/components/shared/atoms/AutoResizingTextarea";
import GradientBackground from "@/components/shared/atoms/GradientBackground";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Chip from "@/components/shared/molecules/Chip";
import Input from "@/components/shared/molecules/Input";
import { SOCIAL_LINKS } from "@/components/shared/organisms/footer/utils";
import Navbar from "@/components/shared/organisms/navbar";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant="yellow" className="absolute w-full mx-4" />
      <main className="pt-[88px]">
        <div className="container flex justify-between mx-auto pt-20 max-w-[80%]">
          {/* CONTACT INFO */}
          <section className="space-y-8">
            <header className="space-y-8">
              <Chip className="bg-gold-100">Contact us</Chip>
              <div className="space-y-2">
                <Typography as="h1" variant="bold-6xl">
                  Get in touch.
                </Typography>
                <Typography
                  as="p"
                  variant="regular-xl"
                  className="text-gray-700"
                >
                  Do you have questions? We&apos;d love to hear from you.
                </Typography>
              </div>
            </header>
            <div className="space-y-4">
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
                    <span className="stroke-black/5">{icon}</span>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* MESSAGE FORM */}
          <section className="min-w-[520px] grid gap-4 items-start bg-black text-white py-6 px-8 rounded-3xl">
            <div className="flex items-center gap-4">
              <span>{SendIcon}</span>
              <Typography variant="medium-lg" className="text-gray-200">
                Send us a message
              </Typography>
            </div>
            <form className="grid gap-4">
              <Input
                name="full-name"
                classNames={{ input: "bg-black" }}
                placeholder="Full name"
              />
              <Input
                name="email"
                classNames={{ input: "bg-gray-90 text-medium-8xl" }}
                placeholder="Email address"
              />
              <AutoResizingTextarea
                className="text-medium-sm"
                placeholder="Type your message"
              />
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
