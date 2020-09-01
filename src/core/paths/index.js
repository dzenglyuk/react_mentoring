import Lesson1 from '../../components/lessons/Lesson1/Main';
import Lesson2 from '../../components/lessons/Lesson2/Main';
import Lesson3 from '../../components/lessons/Lesson3/Main';

const Home = () => {
    return 'Welcome';
}

const pages = [
    { path: '/', title: 'Home', component: Home },
    { path: '/Lesson1', title: 'Lesson1', component: Lesson1 },
    { path: '/Lesson2', title: 'Lesson2', component: Lesson2 },
    { path: '/Lesson3', title: 'Lesson3', component: Lesson3 },
];

export default pages;