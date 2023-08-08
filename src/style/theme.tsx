const color = {
    primary: "#FF5B00",
    secondary: "#FFA151",
    gray01: "#252525",
    gray02: "#383838",
    gray03: "#2E2E2E",
    gray04: "#8C8C8C",
    gray05: "#D4D4D4",
    gray06: "#E9E9E9",
    gray07: "#FFFFFF",
    markerBlue: "#0075FF",
    markerOrange: "#FF5B00",
    markerTagBlue: "#DCE1E8",
    statusActiveBlack: "#383838",
    statusInactive: "#B6B6B6",
    bgOnboarding: "#FFFFFF",
    bgHome: "#F8F8FA",
} as const;

export type Color = keyof typeof color;

export const theme = {
    color,
};
