import { toast } from "react-toastify";
import { API_BASEURL, APPLICATION_FORM_FIELDS } from "./utils/constants";

export const applyToBeta = async (formdata: FormData) => {
  try {
    const {
      email,
      fullname,
      organisation_name,
      organisation_website,
      organisation_phone,
      role,
      ...rest
    } = Object.fromEntries(formdata);
    const organisation_info = {
      email,
      fullname,
      organisation_name,
      organisation_website,
      organisation_phone,
      role,
    };
    const qa_data = Object.entries(rest).map(([key, value]) => ({
      question: APPLICATION_FORM_FIELDS[key].label,
      answer: value,
    }));

    const response = await fetch(`${API_BASEURL}/api/v1/website/beta-qa/`, {
      method: "POST",
      body: JSON.stringify({ organisation_info, qa_data }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong, contact the engineers");
  }
};
export const applyToWaitlist = async (formdata: FormData) => {
  try {
    const { email } = Object.fromEntries(formdata);

    console.log(email);

    const response = await fetch(`${API_BASEURL}/api/v1/website/waitlist/`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong, contact the engineers");
  }
};
