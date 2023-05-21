import { Tooltip } from '@chakra-ui/tooltip';
import Neon from '@components/Neon';
import styles from '@styles/Home.module.scss';
import type { NextPage } from 'next';
import Link from 'next/link';
import { BsChatLeftDots } from 'react-icons/bs';
import {
    SiJavascript,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiSvelte,
    SiTypescript,
    SiVisualstudiocode,
} from 'react-icons/si';

const Home: NextPage = () => {
    const stuffIUse = [
        {
            name: 'Visual Studio Code',
            link: 'https://code.visualstudio.com/',
            icon: <SiVisualstudiocode />,
        },
        {
            name: 'TypeScript',
            link: 'https://www.typescriptlang.org/',
            icon: <SiTypescript />,
        },
        {
            name: 'JavaScript',
            link: 'https://www.typescriptlang.org/',
            icon: <SiJavascript />,
        },
        {
            name: 'NextJS',
            link: 'https://nextjs.org/',
            icon: <SiNextdotjs />,
        },
        {
            name: 'React',
            link: 'https://reactjs.org/',
            icon: <SiReact />,
        },
        {
            name: 'Python',
            link: 'https://python.org/',
            icon: <SiPython />,
        },
        {
            name: 'Svelte Kit',
            link: 'https://kit.svelte.dev/',
            icon: <SiSvelte />,
        },
        {
            name: 'Svelte',
            link: 'https://svelte.dev/',
            icon: <SiSvelte />,
        },
    ];
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title} data-unsel=''>
                <Neon>rens</Neon>
            </h1>
            <div className={styles.role}>front-end ui/ux web designer.</div>
            <div className={styles.stuff_i_use}>
                <div className={styles.stuff_i_use__title}>stuff i use:</div>
                <div className={styles.stuff_i_use__list}>
                    {stuffIUse.map(({ name, link, icon }) => (
                        // @ts-ignore
                        <Tooltip
                            key={name + link}
                            label={name}
                            placement='bottom'
                        >
                            <a
                                href={link}
                                target='_blank'
                                rel='noreferrer'
                                data-label={name.toLowerCase()}
                            >
                                {icon}
                            </a>
                        </Tooltip>
                    ))}
                </div>
            </div>
            <div className={styles.contact__button__wrapper}>
                <Link href='/contact' tabIndex={-1}>
                    <button>
                        <BsChatLeftDots /> Contact Me
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default Home;
