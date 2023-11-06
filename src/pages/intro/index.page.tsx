import { useGoogleLogin } from "@react-oauth/google";
import MoyeoColorLogo from "../../assets/logo/moyeoColorLogo.png";
import {
    BottomLayout,
    Flex,
    Image,
    Layout,
    Spinner,
    Text,
} from "../../libs/ui";
import { GoogleLoginButton } from "./components/GoogleLoginButton";
import { useMutation } from "react-query";
import { client } from "../../libs/api";
import { APIResponseError } from "endpoint-client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { cv } from "../../libs/ui/style";

export function IntroPage() {
    const navigate = useNavigate();

    const { mutate, isLoading } = useMutation(
        (token: string) =>
            client.auth.google.post({
                token,
                redirectUri: `${window.location.origin}`,
            }),
        {
            onSuccess: (data) => {
                localStorage.setItem("token", data.accessToken);
                client.updateAuth(data.accessToken);
                navigate("/main/home");
            },
            onError: (err) => {
                if (err instanceof APIResponseError) {
                    toast.error("서버에서 오류를 응답했어요.");
                    console.error(err);
                } else {
                    toast.error("알 수 없는 문제가 발생했어요.");
                    console.error(err);
                }
            },
        }
    );

    const googleLogin = useGoogleLogin({
        onSuccess: async (data) => {
            mutate(data.code);
        },
        scope: "profile email",
        flow: "auth-code",
    });

    return (
        <>
            <Layout minHeight="100dvh">
                <Flex
                    column
                    align="center"
                    justify="center"
                    height="100%"
                    gap={16}
                >
                    <Image src={MoyeoColorLogo} width="160px" />
                    <Text color={cv.primary} weight="600">
                        대학생들을 하나로 모아주는, 모여!
                    </Text>
                </Flex>
            </Layout>
            <BottomLayout>
                <GoogleLoginButton
                    onClick={() => googleLogin()}
                    isLoading={isLoading}
                >
                    {isLoading ? <Spinner /> : `구글로 로그인하기`}
                </GoogleLoginButton>
            </BottomLayout>
        </>
    );
}
