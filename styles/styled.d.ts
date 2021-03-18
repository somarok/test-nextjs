import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      titleSize: string;
    };
    colors: {
      black: string;
      white: string;
      gray_1: string;
      gray_2: string;
      green_1: string;
    };
    deviceSizes: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      tabletL: string;
      laptop: string;
      desktop: string;
    };
    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      tabletL: string;
      laptop: string;
      desktop: string;
    };
    paddings: {
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    margins: {
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    interval: {
      base: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    verticalInterval: {
      base: string;
    };
    media: {
      custom: (maxWidth: number) => string;
      desktop: string;
      tablet: string;
      phone: string;
    };
  }
}
