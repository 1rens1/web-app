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
                            tabIndex={-1}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {link.title}
                        </a>
                    </li>
                );
            })}
        </>
    );
}
