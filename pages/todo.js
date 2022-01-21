import TodoApp from '../components/TodoApp';
import Head from 'next/head';

export default function Todo() {
    return (
        <>
            <Head>
                <title>To-Do App</title>
            </Head>
            <TodoApp />
        </>
    );
}
