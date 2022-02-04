import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import styles from './Navigator.module.scss';

export default function NavLinks({ links }) {
    return links.map((link) => {
        return (
            <li key={uuidv4()} className={styles.li}>
                <Link href={link.href}>
                    <a>{link.name}</a>
                </Link>
            </li>
        );
    });
}
