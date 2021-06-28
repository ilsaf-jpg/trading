import React from "react"
import Accordion from "../Accordion/Accordion"
import s from "./Info.module.css"

// type PropsType = {
//   title: string
//   content: string
// }

export const Info: React.FC = (props) => {
  return (
    <div>
      <Accordion
        title="SomeText "
        content="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      />
      <Accordion
        title="SomeText "
        content="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      />
    </div>
  )
}
