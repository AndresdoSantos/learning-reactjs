import styles from '../styles/components/Header.module.css';

import igniteLogo from '../assets/Ignite-Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
