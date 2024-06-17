import Image from 'next/image';
import styles from './page.module.css';

import {PageButtons} from './components/PageButton';
import {CarsView} from './components/CarsView';

export default function Home() {
  return (
    <main className={styles.main}>
      <CarsView />
      {/* <PageButtons /> */}
    </main>
  );
}
