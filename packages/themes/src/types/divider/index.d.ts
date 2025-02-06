/**
 *
 * Divider Design Tokens
 *
 * @module themes/divider
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace DividerTokenSections {
    interface Root {
        /**
         * Border color of root
         *
         * @designToken divider.border.color
         */
        borderColor?: string;
    }

    interface Content {
        /**
         * Background of content
         *
         * @designToken divider.content.background
         */
        background?: string;
        /**
         * Color of content
         *
         * @designToken divider.content.color
         */
        color?: string;
    }

    interface Horizontal {
        /**
         * Margin of horizontal
         *
         * @designToken divider.horizontal.margin
         */
        margin?: string;
        /**
         * Padding of horizontal
         *
         * @designToken divider.horizontal.padding
         */
        padding?: string;
        /**
         * Content of horizontal
         */
        content?: {
            /**
             * Content padding of horizontal
             *
             * @designToken divider.horizontal.content.padding
             */
            padding?: string;
        };
    }

    interface Vertical {
        /**
         * Margin of vertical
         *
         * @designToken divider.vertical.margin
         */
        margin?: string;
        /**
         * Padding of vertical
         *
         * @designToken divider.vertical.padding
         */
        padding?: string;
        /**
         * Content of vertical
         */
        content?: {
            /**
             * Content padding of vertical
             *
             * @designToken divider.vertical.content.padding
             */
            padding?: string;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<DividerDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface DividerDesignTokens extends DesignTokens<DividerDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: DividerTokenSections.Root;
    /**
     * Used to pass tokens of the content section
     */
    content?: DividerTokenSections.Content;
    /**
     * Used to pass tokens of the horizontal section
     */
    horizontal?: DividerTokenSections.Horizontal;
    /**
     * Used to pass tokens of the vertical section
     */
    vertical?: DividerTokenSections.Vertical;
}
