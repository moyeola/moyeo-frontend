import React, { useImperativeHandle, useRef, useState } from "react";
import { styled } from "styled-components";

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
    color: ${({ theme }) => theme.color.gray04};
`;

const StyledTextField = styled.input`
    outline: none;
    border: none;
    padding: 8px;
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
    font-size: 20px;
`;

const MaxLength = styled.span`
    position: absolute;
    bottom: 14px;
    right: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray04};
    letter-spacing: -5%;

    span {
        color: ${({ theme }) => theme.color.gray01};
    }
`;

/**
 * TextField는 추후 React Hook Form등 ref를 사용할 경우가 생길 수 있어 ref를 지원합니다.
 */

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    function TextField({ label, value, onChange, ...props }, ref) {
        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

        /**
         * TODO: maxLength 기능 구현으로 인해 제어 컴포넌트가 되었습니다.
         * 추후 React Hook Form을 사용할 때 제어 컴포넌트로 인해 문제가 발생할 수 있으니 주의해주세요.
         * 문제가 발생한다면 현스를 불러주세요.
         */
        const [_value, _setValue] = useState("");
        const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
            _setValue(e.target.value);
        };

        return (
            <Div>
                {label && <Label>{label}</Label>}
                <StyledTextField
                    {...props}
                    ref={ref}
                    value={value || _value}
                    onChange={onChange || _onChange}
                />
                {label && (
                    <MaxLength>
                        <span>{((value as string) || _value).length}</span> / 10
                    </MaxLength>
                )}
            </Div>
        );
    }
);
