import { Button, Container, Flex, BottomLayout, Image, PageLayout, Text } from '../../components';
import { Router } from 'react-router-dom';
import { Home } from '../main/home/index';

export function MainPage() {
    return (
        <Container>
            <Home />
        </Container>
    );
}
