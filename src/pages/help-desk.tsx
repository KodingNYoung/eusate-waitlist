import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";

const HelpDeskPage = () => {
  return (
    <PageTemplate>
      <div>
        <PageHeader position="center" chipLabel="Helpdesk" title="One inbox. Every conversation." description="Support across email, live chat, social, and monitors AI performance and intervene from one interface." />
      </div>
    </PageTemplate>
  )
}

export default HelpDeskPage;
