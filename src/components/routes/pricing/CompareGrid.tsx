import Chip from "@/components/shared/molecules/Chip";
import Typography from "@/components/shared/atoms/Typography";
import { InfoCircleIcon, TickCircleIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { CategoryList, CompareCategoryData, FC } from "@/utils/types";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";

type Props = {
  headerTitle: string;
  headers: CategoryList[];
  data: CompareCategoryData[];
};

export const CompareGrid: FC<Props> = ({ headerTitle, headers, data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-4 border border-gray-100 rounded-3xl min-w-[800px] md:w-full">
        <header className="items-start -b">
          <div className="flex items-end h-[168px] p-2 min-w-64">
            <Typography
              variant="bold-xl"
              className="p-4 text-bold-base md:text-bold-xl"
            >
              {headerTitle}
            </Typography>
          </div>
          <div className="">
            {headers.map(({ id, label, items }) => (
              <CategoryHeader key={id} title={label} items={items} />
            ))}
          </div>
        </header>

        {data.map(({ key, label, price, categories, action }) => (
          <section key={key} className="grid items-start">
            <header className="border-l flex flex-col justify-between h-[168px] p-4">
              <Chip
                variant="light"
                className="text-semibold-sm md:text-semibold-base"
              >
                {label}
              </Chip>
              <Typography
                variant="bold-5xl"
                className="flex flex-wrap items-end text-bold-4xl md:text-bold-5xl"
              >
                ${price}
                <span className="text-semibold-base text-gray-400">
                  /per month
                </span>
              </Typography>
            </header>
            <div className="">
              {categories.map(({ key, features }) => (
                <AnimatedBlock key={key}>
                  <div key={key} className="border-t border-l h-[255px]">
                    <div className="translate-y-[45px]">
                      {Object.values(features).map((v) => (
                        <CategoryData key={key} value={v} />
                      ))}
                    </div>
                  </div>
                </AnimatedBlock>
              ))}
            </div>
            <div className="border-l p-4">
              <Button size="sm" className="py-4 w-full" onClick={action}>
                Get started
              </Button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

type CategoryDataProp = {
  value: boolean | { value: number };
};

const CategoryData: FC<CategoryDataProp> = ({ value }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div>
        {typeof value === "boolean" && (
          <span className="text-center">{value ? TickCircleIcon : "-"}</span>
        )}
        {typeof value === "object" && (
          <Typography className="text-center">{value.value}</Typography>
        )}
      </div>
    </div>
  );
};

type CategoryHeaderProps = {
  title: string;
  items: CategoryList["items"];
};

const CategoryHeader = ({ title, items }: CategoryHeaderProps) => {
  return (
    <div className="p-4 space-y-4 h-[254px] border-t">
      <Typography
        variant="bold-lg"
        className="text-gray-900 text-bold-base md:text-bold-lg"
      >
        {title}
      </Typography>
      <div className="grid gap-8">
        {items.map(({ key, label }) => (
          <div key={key} className="flex justify-between w-full">
            <Typography
              variant="medium-lg"
              className="text-gray-700 text-medium-sm md:text-medium-lg"
            >
              {label}
            </Typography>
            <span className="stroke-gray-300">{InfoCircleIcon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
