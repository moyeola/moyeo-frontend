import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface RedirectProps {
    to: string;
}

/**
 * 특정 주소로 페이지를 이동합니다.
 */
export function Redirect({ to }: RedirectProps) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(to);
    }, [navigate, to]);

    return null;
}
