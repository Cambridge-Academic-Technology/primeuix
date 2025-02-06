/**
 *
 * Card Design Tokens
 *
 * @module themes/card
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace CardTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken card.background
         */
        background?: string;
        /**
         * Border radius of root
         *
         * @designToken card.border.radius
         */
        borderRadius?: string;
        /**
         * Color of root
         *
         * @designToken card.color
         */
        color?: string;
        /**
         * Shadow of root
         *
         * @designToken card.shadow
         */
        shadow?: string;
    }

    interface Body {
        /**
         * Padding of body
         *
         * @designToken card.body.padding
         */
        padding?: string;
        /**
         * Gap of body
         *
         * @designToken card.body.gap
         */
        gap?: string;
    }

    interface Caption {
        /**
         * Gap of caption
         *
         * @designToken card.caption.gap
         */
        gap?: string;
    }

    interface Title {
        /**
         * Font size of title
         *
         * @designToken card.title.font.size
         */
        fontSize?: string;
        /**
         * Font weight of title
         *
         * @designToken card.title.font.weight
         */
        fontWeight?: string;
    }

    interface Subtitle {
        /**
         * Color of subtitle
         *
         * @designToken card.subtitle.color
         */
        color?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<CardDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface CardDesignTokens extends DesignTokens<CardDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: CardTokenSections.Root;
    /**
     * Used to pass tokens of the body section
     */
    body?: CardTokenSections.Body;
    /**
     * Used to pass tokens of the caption section
     */
    caption?: CardTokenSections.Caption;
    /**
     * Used to pass tokens of the title section
     */
    title?: CardTokenSections.Title;
    /**
     * Used to pass tokens of the subtitle section
     */
    subtitle?: CardTokenSections.Subtitle;
}
