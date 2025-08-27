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
        <meta property="og:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta name="image" content="/social-image.jpeg" />
        <meta property="og:image" content="https://www.eusate.com/social-image.jpeg" />
        <meta property="og:image:alt" content="eusate logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default MetaProps;
