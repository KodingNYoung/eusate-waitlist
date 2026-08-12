import Typography from "@/components/shared/atoms/Typography";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeUpVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <section className="container text-center">
      <AnimatedBlock variants={fadeUpVariants} duration={1}>
        <Typography
          as="p"
          className="text-regular-base text-gray-400 max-w-[521px] mx-auto"
        >
          Specific requirements not addressed here? Contact us at{" "}
          <Link
            href="mailto:info@eusate.com"
            className="text-gold-600 text-bold-base underline underline-offset-2"
          >
            info@eusate.com
          </Link>{" "}
          and we&apos;ll work through them with you.
        </Typography>
      </AnimatedBlock>
    </section>
  );
};

export default ContactUs;
