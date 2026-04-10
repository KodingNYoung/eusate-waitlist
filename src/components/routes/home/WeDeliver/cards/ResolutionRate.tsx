import { GridLines } from "@/components/shared/organisms/GridLines";
import { WeDeliverCardTemplate } from ".";

const bars = [
  {
    id: 1,
    delay: 0,
    height: 13.02,
  },
  {
    id: 2,
    delay: 0,
    height: 23.02,
  },
  {
    id: 3,
    delay: 0,
    height: 35
  },
  {
    id: 4,
    delay: 0,
    height: 46.36
  },
  {
    id: 5,
    delay: 0,
    height: 73.8
  },
  {
    id: 6,
    delay: 0,
    height: 113.02
  },
  {
    id: 7,
    delay: 0,
    height: 155.26
  },
];

export const ResolutionRate = () => {
  return (
    <WeDeliverCardTemplate
      classNames={{
        root: "bg-black",
        description: "text-white/60",
        score: "text-white",
      }}
      description="AI ticket resolution rate"
      score={80}
      unit="%"
      graph={
        <div className="relative">
          <GridLines plot={
            <div className="flex items-end gap-2">
              {bars.map(({ id, height }) => (
                <div
                  key={id}
                  style={{
                    height,
                  }}
                  className="bg-white/30 rounded-[8px] w-[30.57px]"
                ></div>
              ))}
            </div>
          } />
        </div>
      }
    />
  );
};
