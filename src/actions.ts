import { toast } from "react-toastify";
import { API_BASEURL, APPLICATION_FORM_FIELDS } from "./utils/constants";

export const apply = async (formdata: FormData) => {
  try {
    const { email, fullname, organisation_name, role, ...rest } =
      Object.fromEntries(formdata);
    const organisation_info = { email, fullname, organisation_name, role };
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
    if (data.success) {
      toast.success(
        "Your application has been logged. You will be contacted if you are shortlisted"
      );
    }
  } catch (err) {
    toast.error(err instanceof Error ? err.message : "Something went wrong");
  }
};
