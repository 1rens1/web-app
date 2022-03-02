import { v4 } from 'uuid';

export default function Todo(props: {
    links: Array<{ title: string; href: string }>;
}) {
    const { links } = props;
    return (
        <>
            {links.map((link) => {
                return (
                    <li key={v4()}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href={link.href}
                        >
                            {link.title}
                        </a>
                    </li>
                );
            })}
        </>
    );
}
