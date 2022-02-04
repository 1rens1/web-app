import { v4 } from 'uuid';

export default function Todo({ links }) {
    return links.map((link) => {
        return (
            <li key={v4()}>
                <a href={link.url} target='_blank' rel='noreferrer'>{link.name}</a>
            </li>
        );
    });
}
