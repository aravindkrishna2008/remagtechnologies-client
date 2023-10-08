import React from "react"

export default function HoverBox({ opt1, opt2 }) {

    const [hover, setHover] = React.useState(false)

    return (
        <div
            className="h-[100%]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? ( opt2 ): ( opt1 )}         
          </div>
    )
}