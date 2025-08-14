import { CardSlashIcon, FlashIcon, LikeBadge } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";

const benefits = [
  { label: "3 months completely free", icon: LikeBadge },
  { label: "Direct founder support", icon: FlashIcon },
  { label: "No credit card required", icon: CardSlashIcon },
];

const BenefitAutoScroller = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full max-w-[610px]  scroll-container min-[739px]:[mask:none] [mask:_radial-gradient(44.94%_28583.45%_at_51.52%_50%,_#2C2D30_0%,_rgba(44,_45,_48,_0)_100%);]">
      <div className="inline-flex animate-[scroll_20s_linear_infinite] min-[739px]:animate-none">
        <div className="inline-flex">
          {benefits.map((benefit, idx) => (
            <Typography
              as="p"
              className="flex items-center gap-2 px-2.5 flex-shrink-0 text-medium-sm text-gray-400"
              key={`set1-${idx}`}
            >
              {benefit.icon}
              <span>{benefit.label}</span>
            </Typography>
          ))}
        </div>
        <div className="min-[739px]:hidden inline-flex">
          {benefits.map((benefit, idx) => (
            <Typography
              as="p"
              className="flex items-center gap-2 px-2.5 flex-shrink-0 text-medium-sm text-gray-400"
              key={`set1-${idx}`}
            >
              {benefit.icon}
              <span>{benefit.label}</span>
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitAutoScroller;
