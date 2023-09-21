import React, {ReactNode} from 'react';
import styles from './box.module.scss'

const Box: React.FunctionComponent<{children: ReactNode | undefined, className?: string}> = (props) => {
  return <section className={`${props.className} ${styles['box']}`}>
    {props.children}
  </section>
}

export default Box;
