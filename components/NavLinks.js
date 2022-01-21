import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function NavLinks({ links, navToggle }) {
    return links.map((link) => {
        const key = uuidv4();
        return (
            <Link key={key} href={link.href}>
                <a onClick={navToggle}>{link.name}</a>
            </Link>
        );
    });
}
