import Chip from "@/components/shared/molecules/Chip";
import Typography from "@/components/shared/atoms/Typography";
import { InfoCircleIcon, TickCircleIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { CategoryList, CompareCategoryData, FC } from "@/utils/types";

type Props = {
  headerTitle: string;
  headers: CategoryList[];
  data: CompareCategoryData[];
};

export const CompareGrid: FC<Props> = ({ headerTitle, headers, data }) => {
  return (
    <div className="grid grid-cols-4 border border-gray-100 rounded-3xl border-collapse">
      <header className="border-b">
        <div className="flex items-end border-b min-h-32 p-2 min-w-64">
          <Typography variant="bold-xl" className="p-4">
            {headerTitle}
          </Typography>
        </div>
        {headers.map(({ id, label, items }) => (
          <CategoryHeader key={id} title={label} items={items} />
        ))}
      </header>

      {data.map(({ key, label, price, categories, action }) => (
        <section key={key} className="border grid">
          <header className="border-b flex flex-col justify-between min-h-32 p-4">
            <Chip variant="light">{label}</Chip>
            <Typography variant="bold-5xl">
              ${price}
              <span className="text-semibold-base">/per month</span>
            </Typography>
          </header>
          <div className="">
            {categories.map(({ key, features }) => (
              <div key={key} className="border-b">
                {Object.values(features).map((v) => (
                  <CategoryData key={key} value={v} />
                ))}
              </div>
            ))}
          </div>
          <Button className="mx-4 mb-4" onClick={action}>
            Get started
          </Button>
        </section>
      ))}
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
        <span className="text-center">
          {typeof value === "boolean" && value ? TickCircleIcon : "-"}
        </span>
        <Typography className="text-center">
          {typeof value === "object" && value.value}
        </Typography>
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
    <div className="p-4 space-y-4">
      <Typography variant="bold-lg" className="text-gray-900">
        {title}
      </Typography>
      <div className="grid gap-4">
        {items.map(({ key, label }) => (
          <div key={key} className="flex justify-between w-full">
            <Typography variant="medium-lg" className="text-gray-700">
              {label}
            </Typography>
            <span className="stroke-gray-300">{InfoCircleIcon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
