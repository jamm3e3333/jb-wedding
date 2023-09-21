import React from "react";

const SaveTheDateItem: React.FC<{text: string, className?: string}> = (props) => {
  return <div className={props.className}>
    {props.text}
  </div>
}

export default SaveTheDateItem;
