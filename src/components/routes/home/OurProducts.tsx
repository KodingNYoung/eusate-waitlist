import Image from "next/image";
import { cls } from "@/utils/helpers";
import { ProductKey } from "@/utils/enum";
import { InternalPath } from "@/utils/types";
import { PRODUCTS_TAB } from "@/utils/constants";
import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { AppTab } from "@/components/shared/molecules/Tabs";
import { SubHeader } from "@/components/shared/organisms/PageHeader";

export const OurProducts = () => {
  return (
    <section className="hidden md:block bg-black py-20 rounded-x40">
      <div className="container space-y-16">
        <SubHeader
          chipLabel="Our Products"
          orientation="horizontal"
          title="The complete support stack for modern team."
          classNames={{
            title: "text-white",
            titleContainer: "w-[45%]",
            root: "w-full items-end justify-between",
          }}
          cta={
            <Button
              className="bg-brand-gradient px-8 py-2"
              endContent={
                <span className="stroke-white">{ArrowRightIcon}</span>
              }
            >
              Try it now
            </Button>
          }
        />
        <div className="bg-white/20 rounded-[20px] py-6 p-4 flex flex-col">
          <AppTab<ProductKey, InternalPath>
            tabs={PRODUCTS_TAB}
            variant="underlined"
            classNames={{
              base: "justify-center",
              tab: cls(
                "text-white/40 stroke-white/40 border-white py-4 w-full",
                "data-[selected=true]:text-white data-[selected=true]:border-b-2 data-[selected=true]:stroke-white",
              ),
            }}
          >
            {(content) => (
              <div className="relative max-w-[1200px] h-[850px]">
                <Image fill src={content} alt="" />
              </div>
            )}
          </AppTab>
        </div>
        <div className="flex justify-center">
          <Button
            variant="outlined"
            className="px-8 py-4"
            endContent={<span className="stroke-black">{ArrowRightIcon}</span>}
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};
