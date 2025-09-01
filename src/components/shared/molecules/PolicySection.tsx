import { FC } from "@/utils/types";
import React from "react";
import Typography from "../atoms/Typography";

type Props = {
  title: string;
};

const PolicySection: FC<Props> = ({ children, title }) => {
  return (
    <section className="mb-10">
      <Typography as="h2" className="text-semibold-lg sm:text-semibold-xl mb-4">
        {title}
      </Typography>
      <div>{children}</div>
    </section>
  );
};

export default PolicySection;
