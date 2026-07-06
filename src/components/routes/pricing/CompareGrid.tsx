import Typography from "@/components/shared/atoms/Typography";
import { InfoCircleIcon, TickCircleIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { CategoryList, CompareCategoryData, FC } from "@/utils/types";
import { motion } from "framer-motion";
import { ComparePlanCat1 } from "@/utils/enum";
import { Tooltip } from "@heroui/tooltip";

type Props = {
  headerTitle: string;
  headers: CategoryList[];
  data: CompareCategoryData[];
  convert: (amount: number) => number;
  symbol: string;
};

export const CompareGrid: FC<Props> = ({
  headerTitle,
  headers,
  data,
  convert,
  symbol,
}) => {
  const plans = data.map((plan) => ({
    ...plan,
    categoryMap: new Map(plan.categories.map((c) => [c.key, c])),
  }));

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[800px] border-separate border-spacing-0 overflow-hidden rounded-3xl border border-gray-100 break-words">
        <thead>
          <tr>
            <th className="pb-[10px] text-left align-bottom min-w-44 w-fit max-w-1/5 sticky left-0">
              <Typography className="text-bold-base md:text-bold-xl p-6 lg:p-8">
                {headerTitle}
              </Typography>
            </th>
            {data.map(({ key, label, price }) => (
              <th
                key={key}
                scope="col"
                className="border-l pt-6 pb-[10px] text-left align-top min-w-44 max-w-1/5"
              >
                <div className="flex flex-col gap-[10px]">
                  <div className="px-6 lg:px-8">
                    <Typography className="w-full text-gray-700 text-semibold-md md:text-semibold-base">
                      {label}
                    </Typography>
                  </div>
                  <Typography className="flex p-6 lg:p-8 flex-col items-start text-bold-3xl">
                    <span className="tracking-[-0.08em]">
                      {symbol}
                      {convert(price).toLocaleString("en-US")}
                    </span>
                    <span className="text-semibold-base text-gray-400">
                      per month
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
            {items.map(({ key: itemKey, label: itemLabel, tooltip }) => (
              <tr key={itemKey}>
                {itemKey === ComparePlanCat1.HEADER ? (
                  <th
                    scope="row"
                    className="border-t p-6 text-left sticky left-0"
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
                    <div className="flex items-center justify-between gap-4">
                      <Typography
                        variant="medium-lg"
                        className="text-gray-700 text-medium-sm md:text-medium-lg"
                      >
                        {itemLabel}
                      </Typography>
                      <Tooltip
                        showArrow
                        crossOffset={-10}
                        placement="right-start"
                        content={
                          <Typography
                            as="span"
                            className="text-gray-500 text-regular-sm"
                          >
                            {tooltip}
                          </Typography>
                        }
                        classNames={{
                          base: "shadow-[0px_12px_24px_6px_#0000001F] rounded-lg",
                          arrow: "bg-white border",
                          content:
                            "text-medium-base bg-white max-w-[210px] border border-gray-100 p-3 rounded-[inherit]",
                        }}
                      >
                        <div className="stroke-gray-300 rotate-180">
                          {InfoCircleIcon}
                        </div>
                      </Tooltip>
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
