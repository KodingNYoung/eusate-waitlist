
import { ArrowLeftIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="tetiary" className="p-4">
      {ArrowLeftIcon}
    </Button>

  )
}

