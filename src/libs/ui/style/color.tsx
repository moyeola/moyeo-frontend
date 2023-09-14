export const colors = {
    primary: "#FF5B00",
    secondary: "#FFA151",
    gray01: "#252525",
    gray02: "#383838",
    gray03: "#535353",
    gray04: "#8C8C8C",
    gray05: "#D4D4D4",
    gray06: "#E9E9E9",
    gray07: "#FFFFFF",
    markerBlue: "#0075FF",
    markerOrange: "#FF5B00",
    markerTagBlue: "#DCE1E8",
    markerBaseBlue: "#F3F6F9",
    statusActiveBlack: "#383838",
    statusInactive: "#B6B6B6",
    statusHover: "#eb5400",
    bgOnboarding: "#FFFFFF",
    bgHome: "rgb(248, 248, 250)",
    delete1: "#E53636",
};
export type Color = keyof typeof colors;

// css에 포함될 변수 정의
const buildCssVariables = (variables: Record<string, string>) => {
    const keys = Object.keys(variables);
    return keys.reduce(
        (acc, key) =>
            acc.concat(`--${key.replace(/_/g, "-")}: ${variables[key]};`, "\n"),
        ""
    );
};
export const cssVariables = buildCssVariables(colors);

// cssVar("markerBlue") => var(--marker-blue)
const cssVar = (name: string) => `var(--${name.replace(/_/g, "-")})`;
const colorNames = Object.keys(colors) as Color[];
export const colorVars = colorNames.reduce((acc, colorName) => {
    acc[colorName] = cssVar(colorName);
    return acc;
}, {} as Record<Color, string>);
