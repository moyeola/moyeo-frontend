import { Layout } from "../../../components";
import { cv } from "../../../libs/ui/style";
import { HomeHeader } from "./containers/HomeHeader/HomeHeader";

const DummyLayout = () => <Layout bgColor={cv.bgHome} minHeight="100dvh" />;

export function HomePage() {
    return (
        <>
            <HomeHeader />
            <DummyLayout />
        </>
    );
}
