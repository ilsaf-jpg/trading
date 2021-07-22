import React, { useState, useRef } from "react"
import "./Accordion.css"
import { Chevron } from "./Chevron"

type PropsType = {
  title: string
  content: string
  scrollHeight?: number
}

export const Accordion: React.FC<PropsType> = (props) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion__icon")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    )

    setHeightState(
      //@ts-ignore: Object is possibly 'null'.
      setActive === "active" ? " 0px" : `${content.current.scrollHeight}px`
    )
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron width={10} fill={"#777"} className={`${setRotate}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </div>
  )
}
