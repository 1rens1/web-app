import Neon from '@components/Neon';
import styles from '@styles/Contact.module.scss';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { BsEnvelope, BsGithub, BsTwitter } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';

const contact = () => {
    const contacts = [
        {
            label: 'Email - rens@hrzn.email',
            link: 'mailto:rens@hrzn.email',
            icon: <BsEnvelope />,
        },
        {
            label: 'Discord (Server) - rens catio',
            link: 'https://discord.gg/a2fqnre3gB',
            icon: <SiDiscord />,
        },
        {
            label: 'Twitter - @rendevv',
            link: 'https://twitter.com/rendevv',
            icon: <BsTwitter />,
        },
        {
            label: 'GitHub - 1rens1',
            link: 'https://github.com/1rens1',
            icon: <BsGithub />,
        },
    ];
    return (
        <>
            <NextSeo title='contact' description='contact me' />
            <div className={styles.wrapper}>
                <Link href='/' className={styles.back__button} data-unsel=''>
                    <span>&larr;</span>
                </Link>
                <div style={{ maxWidth: '600px' }}>
                    <div className={styles.title} data-unsel=''>
                        <Neon>contact</Neon>
                    </div>
                    <div className={styles.contacts}>
                        {contacts.map(({ label, link, icon }) => (
                            <div key={label + link}>
                                <a
                                    href={link}
                                    target='_blank'
                                    rel='noreferrer'
                                    tabIndex={-1}
                                >
                                    <button>
                                        {icon} <span>{label}</span>
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default contact;
