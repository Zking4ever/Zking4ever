import type { ReactElement } from "react";

export default function ToolBox({logo,toolName}:{logo:ReactElement,toolName:string}) {
  return (
     <div className="toolBox">
        {logo}
        <span>{toolName}</span>
    </div>
  )
}