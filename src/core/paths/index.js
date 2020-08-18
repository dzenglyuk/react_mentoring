import Lesson1 from '../../components/lessons/Lesson1/Main';

const Home = () => {
    return 'Welcome';
}

const pages = [
    { path: '/', title: 'Home', component: Home },
    { path: '/Lesson1', title: 'Lesson1', component: Lesson1 },
];

export default pages;