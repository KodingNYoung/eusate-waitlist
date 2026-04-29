// import Typography from "@/components/shared/atoms/Typography"
// import { cls } from "@/utils/helpers"
// import { Progress } from "@heroui/progress"

// type Props = {
//   id: number,
//   title: string,
//   description: string,
//   isProgress?: boolean,
// }

// export const ActionCard = ({ id, title, description, isProgress }: Props) => {
//   return (
//     <div data-active={isProgress} className={cls("flex relative flex-col p-4 rounded-2xl", "data-[active=true]:bg-white data-[active=true]:shadow-soft-xsmall")}>
//       <Progress className="absolute top-0 right-0 w-[400px] h-24" value={70} color="success" />
//       <div className="flex gap-4">
//         <Typography
//           variant="semibold-base"
//           data-active={isProgress}
//           className={cls("text-black/40 data-[active=true]:text-gradient")}
//           as="span"
//         >
//           0{id}.
//         </Typography>
//         <div className="space-y-4">
//           <Typography data-active={isProgress} as="h3" variant="semibold-base" className={cls("text-black/40", "data-[active=true]:text-black")}>{title}</Typography>
//           {isProgress && <Typography className="text-gray-500">{description}</Typography>}
//         </div>
//       </div>
//     </div>
//   )
// }
