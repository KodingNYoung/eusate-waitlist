import { FC } from "@/utils/types";
import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const MetaProps: FC<Props> = ({title, description}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content="/social-image.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default MetaProps;
