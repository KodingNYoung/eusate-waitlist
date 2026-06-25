import Chip from "@/components/shared/molecules/Chip";
import Typography from "@/components/shared/atoms/Typography";
import { TickCircleIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { CategoryList, CompareCategoryData, FC } from "@/utils/types";
import { motion } from "framer-motion";
import { ComparePlanCat1 } from "@/utils/enum";

type Props = {
  headerTitle: string;
  headers: CategoryList[];
  data: CompareCategoryData[];
};

export const CompareGrid: FC<Props> = ({ headerTitle, headers, data }) => {
  const plans = data.map((plan) => ({
    ...plan,
    categoryMap: new Map(plan.categories.map((c) => [c.key, c])),
  }));

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[800px] border-separate border-spacing-0 overflow-hidden rounded-3xl border border-gray-100">
        <thead>
          <tr>
            <th className="pb-[10px] text-left align-bottom min-w-[231px]">
              <Typography
                variant="bold-xl"
                className="text-bold-base md:text-bold-xl p-8 "
              >
                {headerTitle}
              </Typography>
            </th>
            {data.map(({ key, label, price }) => (
              <th
                key={key}
                scope="col"
                className="border-l pt-6 pb-[10px] text-left align-top min-w-[241px]"
              >
                <div className="flex flex-col gap-[10px]">
                  <div className="px-8">
                    <Chip
                      variant="light"
                      classNames={{
                        container: "w-full",
                        content: "text-semibold-sm md:text-semibold-base",
                      }}
                    >
                      {label}
                    </Chip>
                  </div>
                  <Typography
                    variant="bold-5xl"
                    className="flex p-8 flex-wrap items-end text-bold-4xl md:text-bold-5xl"
                  >
                    ${price}
                    <span className="text-semibold-base text-gray-400">
                      /per month
                    </span>
                  </Typography>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {headers.map(({ id, key: categoryKey, label, items }) => (
          <motion.tbody
            key={id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map(({ key: itemKey, label: itemLabel }) => (
              <tr key={itemKey}>
                {itemKey === ComparePlanCat1.HEADER ? (
                  <th
                    // colSpan={1 + data.length}
                    scope="row"
                    className="border-t p-6 text-left"
                  >
                    <Typography
                      variant="bold-lg"
                      className="text-gray-900 text-bold-base md:text-bold-lg"
                    >
                      {label}
                    </Typography>
                  </th>
                ) : (
                  <th scope="row" className="p-6 text-left font-normal">
                    <div className="flex items-center justify-between gap-2">
                      <Typography
                        variant="medium-lg"
                        className="text-gray-700 text-medium-sm md:text-medium-lg"
                      >
                        {itemLabel}
                      </Typography>
                    </div>
                  </th>
                )}

                {plans.map(({ key: planKey, categoryMap }) => (
                  <td
                    key={planKey}
                    className={`border-l p-4 text-center ${
                      itemKey === ComparePlanCat1.HEADER ? "border-t" : ""
                    }`}
                  >
                    <CategoryValue
                      value={categoryMap.get(categoryKey)?.features[itemKey]}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </motion.tbody>
        ))}

        <tfoot>
          <tr>
            <td className="p-4" />
            {data.map(({ key, action }) => (
              <td key={key} className="border-l p-4">
                <Button size="sm" className="py-4 w-full" onClick={action}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

type CategoryValueProp = {
  value: boolean | { details: string | null } | undefined;
};

const CategoryValue: FC<CategoryValueProp> = ({ value }) => {
  if (typeof value === "boolean") {
    return (
      <span className="flex justify-center mx-auto text-center w-full">
        {value ? TickCircleIcon : "-"}
      </span>
    );
  }
  if (typeof value === "object" && value !== null) {
    return <Typography className="text-center">{value.details}</Typography>;
  }
  return <span className="block text-center text-gray-300">-</span>;
};
