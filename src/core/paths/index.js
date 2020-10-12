import Lesson1 from '../../components/lessons/Lesson1/Main';
import Lesson2 from '../../components/lessons/Lesson2/Main';
import Lesson3 from '../../components/lessons/Lesson3/Main';
import Lesson4 from '../../components/lessons/Lesson4/Main';
import Lesson5 from '../../components/lessons/Lesson5/Main';
import Lesson6 from '../../components/lessons/Lesson6/Main';
import Lesson7 from '../../components/lessons/Lesson7/Main';

const Home = () => {
    return 'Welcome';
}

const pages = [
    { path: '/', title: 'Home', component: Home },
    { path: '/Lesson1', title: 'Lesson1', component: Lesson1 },
    { path: '/Lesson2', title: 'Lesson2', component: Lesson2 },
    { path: '/Lesson3', title: 'Lesson3', component: Lesson3 },
    { path: '/Lesson4', title: 'Lesson4', component: Lesson4 },
    { path: '/Lesson5', title: 'Lesson5', component: Lesson5 },
    { path: '/Lesson6', title: 'Lesson6', component: Lesson6 },
    { path: '/Lesson7', title: 'Lesson7', component: Lesson7 },
];

export default pages;