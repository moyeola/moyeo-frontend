import { styled } from 'styled-components';
import { Button, Container, Flex, BottomLayout, Image, PageLayout, Text } from '../../components';
import { Header } from '../main/component/Header';
import { Color } from "../../style/theme";

export function MainPage() {
    return (
        <Container color='bgHome'>
            <Header />
        </Container>
    );
}