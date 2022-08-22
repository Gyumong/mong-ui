import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import commonTheme from "./common";

const stitches = createStitches({
  ...commonTheme,
});

export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const theme = stitches.theme;
export const config = stitches.config;

export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;
export type StitchesTheme = typeof theme;
