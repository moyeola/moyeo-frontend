import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { styled } from "styled-components";
import { cv } from "../../../style";

export type TextFieldProps = {
    label?: string;
    placeholder?: string;
    maxLength?: number;
} & React.ComponentPropsWithRef<"input">;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${cv.gray04};
`;

const StyledTextField = styled.input`
    outline: none;
    border: none;
    padding: 8px;
    border-bottom: 2px solid ${cv.primary};
    font-size: 20px;
`;

const MaxLength = styled.span`
    position: absolute;
    bottom: 14px;
    right: 8px;
    font-size: 16px;
    color: ${cv.gray04};
    letter-spacing: -5%;

    span {
        color: ${cv.gray01};
    }
`;

/**
 * TextField는 추후 React Hook Form등 ref를 사용할 경우가 생길 수 있어 ref를 지원합니다.
 */

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    function TextField({ label, maxLength, ...props }, ref) {
        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

        const [length, setLength] = useState(0);

        useEffect(() => {
            const current = inputRef.current;

            const handler = (e: KeyboardEvent) => {
                setTimeout(() => {
                    const target = e.target as HTMLInputElement;
                    setLength(target.value.length);
                    if (maxLength && target.value.length > maxLength) {
                        target.value = target.value.slice(0, maxLength);
                        setLength(maxLength);
                    }
                }, 0);
            };

            if (current) {
                current.addEventListener("keydown", handler);
            }

            return () => {
                if (current) {
                    current.removeEventListener("keypress", handler);
                }
            };
        }, [maxLength]);

        return (
            <Div>
                {label && <Label>{label}</Label>}
                <StyledTextField
                    ref={inputRef}
                    maxLength={maxLength}
                    {...props}
                />
                {maxLength && (
                    <MaxLength>
                        <span>{length}</span> / {maxLength}
                    </MaxLength>
                )}
            </Div>
        );
    }
);
