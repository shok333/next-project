import styles from './page.module.css'
import { Button } from 'antd';
import { FC } from 'react';

interface IIndexProps {

}

const Index: FC<IIndexProps> = () => {
  return (
    <div className={styles.main}>
      <Button type="primary">{222}</Button>
    </div>
  )
}

export default Index
