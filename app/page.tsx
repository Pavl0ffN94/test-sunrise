import Image from 'next/image';
import styles from './page.module.css';
import {CarsView, FilterComponent} from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterComponent />
      <CarsView />
    </main>
  );
}
