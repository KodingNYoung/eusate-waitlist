import {
  ADD_ON_LIST,
  CATEGORY_LIST,
  COMPARE_PRICING_LIST,
  PRICING,
} from "@/utils/constants";
import Chip from "@/components/shared/molecules/Chip";
import Button from "@/components/shared/molecules/Button";
import Footer from "@/components/shared/organisms/footer";
import Navbar from "@/components/shared/organisms/navbar";
import Typography from "@/components/shared/atoms/Typography";
import { AddOnCard } from "@/components/routes/pricing/AddonsCard";
import { CompareGrid } from "@/components/routes/pricing/CompareGrid";
import { PricingCard } from "@/components/routes/pricing/PricingCard";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[88px] bg-gradient-to-r from-gray-500 to-white min-h-screen w-full">
        <div className="container max-w-[80%] py-20 space-y-20">
          <header className="space-y-4">
            <Chip className="bg-gold-100">Our Pricing</Chip>
            <div className="flex justify-between items-end">
              <div className="space-y-4">
                <Typography as="h1" variant="bold-6xl">
                  Unlock Full Access
                </Typography>
                <Typography as="p" className="text-gray-700">
                  We charge by value delivered, not vanity metrics. Transparent
                  plans. No hidden fees. Cancel anytime.
                </Typography>
              </div>
              <Button className="py-4.5 px-3">Compare our plans</Button>
            </div>
          </header>

          {/* PRICING */}
          <section className="flex justify-center">
            <div className="flex gap-3 items-center">
              {PRICING.map(({ key, ...pricing }) => (
                <PricingCard key={key} {...pricing} />
              ))}
            </div>
          </section>

          {/* COMPARE PLANS */}
          <section className="flex flex-col items-center space-y-20">
            <header className="space-y-4 max-w-[777px]">
              <Typography as="h1" variant="bold-6xl" className="text-center">
                Compare our plans
              </Typography>
              <Typography
                as="p"
                className="text-center text-regular-xl text-gray-700"
              >
                We charge by value delivered, not vanity metrics. Transparent
                plans. No hidden fees. Cancel anytime.
              </Typography>
            </header>
            <CompareGrid
              headerTitle="Plan Features"
              headers={CATEGORY_LIST}
              data={COMPARE_PRICING_LIST}
            />
          </section>

          {/* ADD ONs */}
          <section className="space-y-20">
            <header className="space-y-4">
              <Typography as="h1" variant="bold-6xl">
                Add-ons
              </Typography>
              <Typography as="p" className="text-regular-xl text-gray-700">
                Expand your plan capacity with our friendly add ons. Add or
                remove anytime.
              </Typography>
            </header>
            <div className="space-y-4">
              {ADD_ON_LIST.map(({ id, ...addOn }) => (
                <AddOnCard key={id} {...addOn} />
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
