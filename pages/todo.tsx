import TodoApp from '../components/Todo/TodoApp';
import Head from 'next/head';

export default function Todo() {
    return (
        <>
            <Head>
                <title>rens - To Do App</title>
            </Head>
            <TodoApp />
        </>
    );
}
