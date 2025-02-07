/**
 *
 * ConfirmPopup Design Tokens
 *
 * @module confirmpopup
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace ConfirmPopupTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken confirmpopup.background
         */
        background?: string;
        /**
         * Border color of root
         *
         * @designToken confirmpopup.border.color
         */
        borderColor?: string;
        /**
         * Color of root
         *
         * @designToken confirmpopup.color
         */
        color?: string;
        /**
         * Border radius of root
         *
         * @designToken confirmpopup.border.radius
         */
        borderRadius?: string;
        /**
         * Shadow of root
         *
         * @designToken confirmpopup.shadow
         */
        shadow?: string;
        /**
         * Gutter of root
         *
         * @designToken confirmpopup.gutter
         */
        gutter?: string;
        /**
         * Arrow offset of root
         *
         * @designToken confirmpopup.arrow.offset
         */
        arrowOffset?: string;
    }

    interface Content {
        /**
         * Padding of content
         *
         * @designToken confirmpopup.content.padding
         */
        padding?: string;
        /**
         * Gap of content
         *
         * @designToken confirmpopup.content.gap
         */
        gap?: string;
    }

    interface Icon {
        /**
         * Size of icon
         *
         * @designToken confirmpopup.icon.size
         */
        size?: string;
        /**
         * Color of icon
         *
         * @designToken confirmpopup.icon.color
         */
        color?: string;
    }

    interface Footer {
        /**
         * Gap of footer
         *
         * @designToken confirmpopup.footer.gap
         */
        gap?: string;
        /**
         * Padding of footer
         *
         * @designToken confirmpopup.footer.padding
         */
        padding?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<ConfirmPopupDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface ConfirmPopupDesignTokens extends DesignTokens<ConfirmPopupDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: ConfirmPopupTokenSections.Root;
    /**
     * Used to pass tokens of the content section
     */
    content?: ConfirmPopupTokenSections.Content;
    /**
     * Used to pass tokens of the icon section
     */
    icon?: ConfirmPopupTokenSections.Icon;
    /**
     * Used to pass tokens of the footer section
     */
    footer?: ConfirmPopupTokenSections.Footer;
}
