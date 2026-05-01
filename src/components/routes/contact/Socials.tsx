import { LocationIcon, PhoneIcon, SmsIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { SOCIAL_LINKS } from "@/components/shared/organisms/footer/utils";

export const SocialLinks = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-10">
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
      <div className="flex justify-between md:justify-start gap-4">
        {SOCIAL_LINKS.map(({ id, icon, link }) => (
          <Button
            key={id}
            href={link}
            variant="tetiary"
            classNames={{ root: "p-3 bg-gray-50" }}
          >
            <span className="stroke-gray-30 fill-[#98A2B3]">{icon}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
