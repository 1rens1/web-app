import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import styles from '@styles/Navigator.module.scss';

export default function NavLinks(props: {
    links: Array<{ title: string; href: string }>;
}) {
    const { links } = props;
    return (
        <>
            {links.map((link) => {
                return (
                    <li key={uuidv4()} className={styles.li}>
                        <Link href={link.href}>
                            <a tabIndex={-1}>{link.title}</a>
                        </Link>
                    </li>
                );
            })}
        </>
    );
}
