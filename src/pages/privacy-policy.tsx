import Typography from "@/components/shared/atoms/Typography";
import MetaProps from "@/components/shared/molecules/MetaProps";
import PolicySection from "@/components/shared/molecules/PolicySection";
import Footer from "@/components/shared/organisms/footer";
import Navbar from "@/components/shared/organisms/navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <MetaProps
        title="Privacy Policy - eusate"
        description="Learn how eusate protects your data and customer information. Our privacy policy outlines data collection, usage, and security practices for our platform."
      />
      <Navbar />
      <div className="pt-24 sm:pt-32 bg-[url(/images/benefit-bg.webp),_linear-gradient(#0A0A0A,_#0A0A0A)] bg-center bg-no-repeat bg-cover min-h-screen">
        <div className="bg-white rounded-t-x20">
          <div className="container max-w-[1120px] py-20">
            <header className="mb-10">
              <Typography
                as="h1"
                className="text-bold-xl sm:text-bold-3xl text-black mb-4 sm:mb-6"
              >
                Eusate Privacy Policy
              </Typography>
              <Typography
                as="span"
                className="text-regular-sm sm:text-regular-lg text-gray-600"
              >
                Last Updated: [Insert Date]
              </Typography>
            </header>

            <PolicySection title="1. Introduction">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                Welcome to Eusate, an AI-driven customer support platform
                developed by [Company Name] (&apos;we&apos;, &apos;us&apos;,
                &apos;Eusate&apos;). These Terms & Conditions
                (&apos;Terms&apos;) govern your access to and use of Eusate,
                including its Early Tester Program with three months of free
                access, founder support, and no credit card requirement. By
                applying, registering, or using the service, you agree to these
                Terms.
              </Typography>
            </PolicySection>

            <PolicySection title="2. Early Tester Program">
              <ul className="list-disc list-outside pl-4 space-y-2">
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Eligible users may apply to participate in the Early Tester
                    Program, subject to approval.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Approved users receive three (3) months of free access, with
                    no credit card required and direct access to founder
                    support.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    We reserve the right to modify or cancel the program at any
                    time, and participation does not guarantee continued access
                    beyond the period.
                  </Typography>
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="3. Scope of Service">
              <Typography
                as="p"
                className="text-gray-600 mb-2 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                Eusate offers:
              </Typography>
              <ul className="list-disc list-outside space-y-2 pl-4">
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    AI-powered helpdesk with intelligent ticket routing and
                    automated responses;
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Dynamic, self-updating smart knowledge base;
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Developer Space with authentication configuration and
                    customizable functionalities
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    AI Playground to test and refine AI behavior;
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Advanced analytics tracking customer interactions and
                    support metrics;
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Continuous learning features to enhance AI performance over
                    time.
                  </Typography>
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="4. Registration & Access">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                Users must provide accurate information during registration. You
                are responsible for safeguarding your credentials and liable for
                any account activity.
              </Typography>
            </PolicySection>

            <PolicySection title="5. Acceptable Use">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                You agree not to misuse the platform—for instance by introducing
                malicious content, harassing others, or attempting unauthorized
                access. We may suspend or terminate access for misuse.
              </Typography>
            </PolicySection>

            <PolicySection title="6. Intellectual Property">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                All intellectual property rights in Eusate, including AI models,
                software, documentation, and trademarks, remain our exclusive
                property. You may not copy, reverse engineer, or redistribute
                any part of the service.
              </Typography>
            </PolicySection>

            <PolicySection title="7. Privacy & Data">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                Your data privacy is important to us. Any customer data,
                including tickets, conversation logs, analytics, and support
                documentation, will be handled in accordance with our Privacy
                Policy. Your data will not be used for AI training or other
                external purposes without explicit consent. (You may wish to
                expand this with relevant privacy policy language.)
              </Typography>
            </PolicySection>

            <PolicySection title="8. Disclaimers & Limitations">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                The Early Access service is provided &apos;as is&apos; and may
                contain bugs or inaccuracies. We disclaim all warranties,
                express or implied, regarding reliability, suitability, or
                non-infringement. Our liability is limited to rectify the
                service or refund any paid fees, to the extent permitted by law.
              </Typography>
            </PolicySection>

            <PolicySection title="9. Modifications & Termination">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We may update these Terms or suspend/terminate your access to
                Eusate at any time, with or without notice—especially after the
                Early Access phase ends or the service evolves beyond this
                preview.
              </Typography>
            </PolicySection>

            <PolicySection title="10. Governing Law">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                These Terms are governed by the laws of [Jurisdiction, e.g.,
                Delaware, U.S.]. Disputes will be resolved in the courts of that
                jurisdiction.
              </Typography>
            </PolicySection>

            <PolicySection title="11. Contact">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                For any inquiries, feedback, or support, please reach out via
                [contact email or support portal].
              </Typography>
            </PolicySection>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
