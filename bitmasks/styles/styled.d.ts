import 'styled-components';

// MyTheme.ts

export type MyTheme = {
    title: string;
    colors:{
        primary: string,
        secondary: string,
        primaryDarker: string,
    }
};

declare module 'styled-components'{
    export interface DefaultTheme extends MyTheme {}
}