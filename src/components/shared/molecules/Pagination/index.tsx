"use client";

import { FC, TWClassNames } from "@/utils/types";
import {
  Pagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from "@heroui/pagination";
import React, { useCallback } from "react";
import Button from "../Button";
import { ArrowRightIcon } from "@/assets/icons";
import { cls } from "@/utils/helpers";
import { useMediaQuery } from "@/utils/hooks";

export type AppPaginationProps = {
  page: number;
  total: number;
  className?: TWClassNames;
  onChange: (page: number) => void;
};

const AppPagination: FC<AppPaginationProps> = ({ page, total, onChange }) => {
  const isMobile = useMediaQuery();

  const renderItem = useCallback(
    ({
      ref,
      key,
      value,
      isActive,
      total,
      onNext,
      onPrevious,
      setPage,
      className,
    }: PaginationItemRenderProps) => {
      if (value === PaginationItemType.PREV) {
        return (
          <Button
            variant="text"
            onClick={onPrevious}
            disabled={page === 1}
            className={cls(
              className,
              "rounded-full !w-12 !h-12 rotate-180 !bg-black !stroke-white !hover:bg-black ",
              "disabled:!bg-gray-100 disabled:!stroke-gray-400",
            )}
          >
            <span>{ArrowRightIcon}</span>
          </Button>
        );
      }
      if (value === PaginationItemType.NEXT) {
        return (
          <Button
            variant="text"
            onClick={onNext}
            disabled={page >= total}
            className={cls(
              className,
              "rounded-full !w-12 !h-12 !bg-black !stroke-white !hover:bg-black ",
              "disabled:!bg-gray-100 disabled:!stroke-gray-400",
            )}
          >
            <span>{ArrowRightIcon}</span>
          </Button>
        );
      }

      if (value === PaginationItemType.DOTS) {
        return (
          <Button
            variant="tetiary"
            onClick={onPrevious}
            className={cls(
              className,
              "rounded-full stroke-gray-400 !w-12 !h-12",
            )}
          >
            ...
          </Button>
        );
      }

      return (
        <button
          key={key}
          ref={ref}
          data-active={isActive}
          className={cls(
            className,
            "!text-gray-500 text-bold-base border border-[#DFE3E8] rounded-full leading-[150%] !w-12 !h-12",
            "data-[active=true]:!text-gold-600 data-[active=true]:border-gold-600",
          )}
          onClick={() => {
            setPage(value);
          }}
        >
          {value}
        </button>
      );
    },
    [page, total],
  );
  return (
    <div className="flex justify-center w-full pt-4 md:pt-6">
      <Pagination
        showControls
        size="lg"
        variant="light"
        renderItem={renderItem}
        total={total}
        page={page}
        onChange={onChange}
        siblings={isMobile ? 0 : 1}
        boundaries={isMobile ? 1 : 1}
        classNames={{
          cursor:
            "bg-gray-50 border-none right-0 shadow-none rounded-none !text-gray-900 text-medium-sm w-[39px] min-w-[39px]",
          wrapper: "gap-3",
        }}
      />
    </div>
  );
};

export default AppPagination;
