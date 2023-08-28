import React from "react";
import type { Preview } from "@storybook/react";
import { MoyeoUiWrapper } from "../src/libs/ui";
import { themes } from "@storybook/theming";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        darkMode: {
            dark: { ...themes.dark },
            light: { ...themes.normal },
        },
    },
    decorators: [
        (Story: any) => {
            return (
                <MoyeoUiWrapper>
                    <Story />
                </MoyeoUiWrapper>
            );
        },
    ],
};

export default preview;
