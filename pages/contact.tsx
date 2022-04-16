import styles from '@styles/Contact.module.scss';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { BsEnvelope, BsGithub, BsTwitter } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

const contact = () => {
    const contacts: Array<{
        label: string;
        link: string;
        icon: JSX.Element;
    }> = [
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
            label: 'Twitter - @rens_exe',
            link: 'https://twitter.com/rens_exe',
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
                <Link href='/'>
                    <a className={styles.back__button} data-unsel=''>
                        <span>&larr;</span>
                    </a>
                </Link>
                <div style={{ maxWidth: '600px' }}>
                    <div className={styles.title} data-unsel=''>
                        <span>contact</span>
                    </div>
                    <div className={styles.contacts}>
                        {contacts.map(({ label, link, icon }) => (
                            <div key={uuidv4()}>
                                <a href={link} target='_blank' rel='noreferrer'>
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
