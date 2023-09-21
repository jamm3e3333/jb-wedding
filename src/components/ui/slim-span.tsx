import React, {ReactNode} from "react";
import styles from './slim-span.module.scss';
const SlimSpan: React.FC<{children: ReactNode | undefined, className?: string }> = (props) => {
  return <span className={`${props.className} ${styles['slim-para']} }`}>{props.children}</span>
}

export default SlimSpan;
