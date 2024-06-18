import Image from 'next/image';
import styles from './page.module.css';

import {PageButtons} from './components/PageButton';
import {CarsView} from './components/CarsView';
import {FilterComponent} from './components/FilterComponents';

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterComponent />
      <CarsView />
    </main>
  );
}
