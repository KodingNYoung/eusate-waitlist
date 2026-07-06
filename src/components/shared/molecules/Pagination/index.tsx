"use client";

import { FC, TWClassNames } from "@/utils/types";
import {
  Pagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from "@heroui/pagination";
import React, { useCallback, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
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
      const _onPrevious = () => {
        setCurrentPage((v) => v - 1);
        onPrevious();
      };

      const _onNext = () => {
        setCurrentPage((v) => v - 1);
        onNext();
      };

      if (value === PaginationItemType.PREV) {
        return (
          <Button
            variant="text"
            onClick={_onPrevious}
            className={cls(
              className,
              "rounded-full !w-12 !h-12 rotate-180 ",
              currentPage === 1
                ? "!bg-gray-100 !stroke-gray-400"
                : "!bg-black !stroke-white",
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
            onClick={_onNext}
            className={cls(
              className,
              "rounded-full !w-12 !h-12 ",
              currentPage === total
                ? "!bg-gray-100 !stroke-gray-400"
                : "!bg-black !stroke-white !hover:bg-black",
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
            onClick={_onPrevious}
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
            setCurrentPage(value);
          }}
        >
          {value}
        </button>
      );
    },
    [currentPage],
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
        }}
      />
    </div>
  );
};

export default AppPagination;
