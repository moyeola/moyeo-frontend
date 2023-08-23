import {
    Button,
    Flex,
    BottomLayout,
    Image,
    PageLayout,
    Text,
} from '../../../components';
import { Container } from '../../../components';
import { Header } from '../home/component/Header';
import { WeeklyCalendar } from './component/WeeklyCanlender';

export function Home() {
    return (
        <Container color="bgHome">
            <Header />
            <WeeklyCalendar />
        </Container>
    );
}
