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
        path="/privacy-policy"
        jsonLdData={{
          type: "legal",
          data: {
            description:
              "Privacy policy and data handling practices for Eusate platform",
            path: "/privacy-policy",
            lastModified: "2025-09-01", // Update with your actual last modified date
          },
        }}
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
                Last Updated: Monday, 01 September, 2025
              </Typography>
            </header>

            <PolicySection title="1. Introduction">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                Eusate (“we,” “us,” or “our”) is committed to protecting the
                privacy and security of our users and their customers. This
                Privacy Policy explains how we collect, use, store, and protect
                your personal information when you access or use our AI-powered
                customer support platform, including during the Early Tester
                Program. By using our platform, you agree to the collection and
                use of information in accordance with this Privacy Policy.
              </Typography>
            </PolicySection>
            <PolicySection title="2. Information We Collect">
              <Typography
                as="span"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We collect the following categories of information:
              </Typography>
              <ol className="list-outside list-[lower-alpha] pl-5 mt-3 space-y-3">
                <li className="text-medium-base sm:text-medium-lg">
                  <Typography
                    as="h3"
                    className="mb-2 text-medium-base sm:text-medium-lg"
                  >
                    Information You Provide
                  </Typography>
                  <ul className="list-disc list-outside pl-4 space-y-2">
                    <li>
                      <Typography
                        as="span"
                        className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                      >
                        Name, email address, company name, and other details
                        submitted during registration or Early Tester Program
                        application.
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="span"
                        className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                      >
                        Content you submit through the platform, such as support
                        tickets, conversation logs, documents, and uploaded
                        files.
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="span"
                        className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                      >
                        Feedback, feature requests, or other communication you
                        send to us.
                      </Typography>
                    </li>
                  </ul>
                </li>
                <li className="text-medium-base sm:text-medium-lg">
                  <Typography
                    as="h3"
                    className="mb-2 text-medium-base sm:text-medium-lg"
                  >
                    Automatically Collected Information
                  </Typography>
                  <ul className="list-disc list-outside pl-4 space-y-2">
                    <li>
                      <Typography
                        as="span"
                        className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                      >
                        Usage data (e.g., pages visited, features used,
                        date/time of access).
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="span"
                        className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                      >
                        Device and browser information (e.g., IP address,
                        operating system, browser type).
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="span"
                        className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                      >
                        Interaction analytics to help improve AI responses and
                        platform functionality.
                      </Typography>
                    </li>
                  </ul>
                </li>
                <li className="text-medium-base sm:text-medium-lg">
                  <Typography
                    as="h3"
                    className="mb-2 text-medium-base sm:text-medium-lg"
                  >
                    Customer & End-User Data
                  </Typography>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    When you use Eusate to handle customer support, we may
                    process your customers’ personal data (e.g., names, emails,
                    conversation history). You are the “data controller” for
                    such information; Eusate acts as a “data processor” in
                    accordance with your instructions.
                  </Typography>
                </li>
              </ol>
            </PolicySection>
            <PolicySection title="3. How We Use Your Information">
              <Typography
                as="p"
                className="text-gray-600 mb-2 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We use collected data to:
              </Typography>
              <ul className="list-disc list-outside space-y-2 pl-4 py-3">
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Provide and maintain the Eusate platform and services.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Enable AI-powered responses
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Improve system performance through analytics and
                    troubleshooting.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Communicate updates, service notices, and feature releases.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Enforce our Terms & Conditions and prevent misuse.
                  </Typography>
                </li>
              </ul>
              <Typography
                as="p"
                className="text-gray-600 mb-2 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We do <b>not</b> sell your personal information or customer
                data.
              </Typography>
            </PolicySection>
            <PolicySection title="4. Data Storage & Retention">
              <ul className="list-disc list-outside space-y-2 pl-4 py-3">
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Your data is stored on secure servers located in UK, London.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    We retain personal information only as long as necessary for
                    the purposes described in this policy, or as required by
                    law.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Upon request, we will delete or anonymize your data, subject
                    to legal retention requirements.
                  </Typography>
                </li>
              </ul>
            </PolicySection>
            <PolicySection title="5. Data Security">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We implement appropriate technical and organizational measures
                to protect your data against unauthorized access, loss, misuse,
                or disclosure. However, no internet transmission is completely
                secure, and we cannot guarantee absolute security.
              </Typography>
            </PolicySection>
            <PolicySection title="6. How We Use Your Information">
              <Typography
                as="p"
                className="text-gray-600 mb-2 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We may share your information:
              </Typography>
              <ul className="list-disc list-outside space-y-2 pl-4 py-3">
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    With trusted service providers who assist us in operating
                    the platform (e.g., hosting providers, analytics tools).
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    If required by law, regulation, or legal process.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    To investigate potential violations of our Terms or protect
                    our rights, property, and safety.
                  </Typography>
                </li>
              </ul>
              <Typography
                as="p"
                className="text-gray-600 mb-2 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We do <b>not</b> share customer data with third parties for
                marketing purposes.
              </Typography>
            </PolicySection>
            <PolicySection title="7. Your Rights">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                Depending on your location, you may have rights under applicable
                data protection laws (e.g., GDPR, CCPA), including:
              </Typography>
              <ul className="list-disc list-outside space-y-2 pl-4 py-3">
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Right to access, correct, or delete your personal data.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Right to restrict or object to processing.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Right to data portability.
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="span"
                    className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
                  >
                    Right to withdraw consent at any time.
                  </Typography>
                </li>
              </ul>
              <Typography
                as="p"
                className="text-gray-600 mb-2 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                To exercise these rights, contact us at{" "}
                <a
                  className="text-info-500"
                  href="mailto:info@eusate.com"
                  target="_blank"
                  rel="noreferer nofollow"
                >
                  info@eusate.com
                </a>
                .
              </Typography>
            </PolicySection>

            <PolicySection title="8. International Data Transfers">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                If you are located outside Nigeria, your data may be transferred
                to and processed in countries where data protection laws may
                differ from yours. We will take appropriate measures to protect
                your data during such transfers.
              </Typography>
            </PolicySection>

            <PolicySection title="9. Children’s Privacy">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                Eusate is not directed to individuals under the age of 16. We do
                not knowingly collect personal data from minors. If we learn we
                have collected personal data from a minor, we will delete it
                promptly.
              </Typography>
            </PolicySection>

            <PolicySection title="10. Changes to This Policy">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with the updated “Last Updated”
                date. Significant changes may be communicated via email or
                platform notification.
              </Typography>
            </PolicySection>

            <PolicySection title="11. Contact Us">
              <Typography
                as="p"
                className="text-gray-600 leading-relaxed text-regular-sm sm:text-regular-lg"
              >
                If you have any questions, concerns, or requests regarding this
                Privacy Policy, please contact us at:
              </Typography>
              <Typography as="p" className="grid text-gray-600 mt-2">
                <span>Eusate</span>
                <span>
                  Email:{" "}
                  <a className="text-info-500" href="mailto:info@eusate.com">
                    {" "}
                    info@eusate.com
                  </a>
                </span>
                <span>
                  Website:{" "}
                  <a
                    className="text-info-500"
                    target="_blank"
                    rel="noreferer nofollow"
                    href="https://www.eusate.com"
                  >
                    www.eusate.com
                  </a>
                </span>
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
