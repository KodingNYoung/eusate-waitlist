"use client"

import { SATE_AI_ACTIONS } from "@/utils/constants"
import { ActionCard } from "./ActionCard"
import { ReactElement, useEffect, useState } from "react"
import { FC, } from "@/utils/types"


type Props = {
  header: ReactElement,
}

export const SateAction: FC<Props> = ({ header }) => {
  const [, setCounter] = useState(0);
  // const [currentAction, setCurrentAction] = useState<SateAiAction>("action-1");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {


  })

  return (
    <div>
      {header}

      <div>
        {
          SATE_AI_ACTIONS.map(({ key, ...action }) => <ActionCard key={key} {...action} />)
        }
      </div>
    </div>
  )
}

