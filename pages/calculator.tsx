import Head from 'next/head';
import Calculator from '../components/Calculator/Calculator';

export default function calculatorApp() {
    return (
        <>
            <Head>
                <title>rens - Calculator</title>
                <meta name='description' content='Simple online calculator' />
            </Head>
            <Calculator />
        </>
    );
}
