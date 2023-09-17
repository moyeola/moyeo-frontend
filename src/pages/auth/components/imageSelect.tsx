import { useRef, useState } from "react";
import { cv } from "../../../libs/ui/style";

import PenIcon from "../assets/pen.svg";
import ProfilePlaceholder from "../assets/profilePlaceholder.png";

import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 160px;
    height: 160px;
    margin: 0 auto;
`;

const ImageInput = styled.input.attrs({
    type: "file",
    accept: "image/*",
})`
    display: none;
`;

const ImagePreview = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 160px;
`;

const PenIconDiv = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    background-color: ${cv.primary};
    border-radius: 1000px;
    cursor: pointer;
`;

const PenIconImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`;

export type ImageSelectProps = {
    setImage: (file: File) => void;
    image?: File;
    showPenIcon?: boolean; // New prop
};

export function ImageSelect({
    setImage,
    showPenIcon = true,
}: ImageSelectProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState<string>();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const selectImage = () => {
        inputRef.current?.click();
    };

    return (
        <Div>
            <ImageInput ref={inputRef} onChange={handleImageChange} />
            <ImagePreview
                src={previewImage || ProfilePlaceholder}
                onClick={selectImage}
            />
            {showPenIcon && (
                <PenIconDiv>
                    <PenIconImg src={PenIcon} onClick={selectImage} />
                </PenIconDiv>
            )}
        </Div>
    );
}
