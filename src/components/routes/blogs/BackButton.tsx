import { ArrowLeftIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="flex gap-x-4 items-center">
      <Button variant="tetiary" className="p-4">
        {ArrowLeftIcon}
      </Button>
      <Typography variant="medium-base" className="md:hidden text-gray-500">
        Back to blogs
      </Typography>
    </div>
  );
};
