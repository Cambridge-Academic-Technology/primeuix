/**
 *
 * Steps Design Tokens
 *
 * @module steps
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace StepsTokenSections {
    interface Root {
        /**
         * Transition duration of root
         *
         * @designToken steps.transition.duration
         */
        transitionDuration?: string;
    }

    interface Separator {
        /**
         * Background of separator
         *
         * @designToken steps.separator.background
         */
        background?: string;
    }

    interface ItemLink {
        /**
         * Border radius of item link
         *
         * @designToken steps.item.link.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of item link
         */
        focusRing?: {
            /**
             * Focus ring width of item link
             *
             * @designToken steps.item.link.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of item link
             *
             * @designToken steps.item.link.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of item link
             *
             * @designToken steps.item.link.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of item link
             *
             * @designToken steps.item.link.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of item link
             *
             * @designToken steps.item.link.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Gap of item link
         *
         * @designToken steps.item.link.gap
         */
        gap?: string;
    }

    interface ItemLabel {
        /**
         * Color of item label
         *
         * @designToken steps.item.label.color
         */
        color?: string;
        /**
         * Active color of item label
         *
         * @designToken steps.item.label.active.color
         */
        activeColor?: string;
        /**
         * Font weight of item label
         *
         * @designToken steps.item.label.font.weight
         */
        fontWeight?: string;
    }

    interface ItemNumber {
        /**
         * Background of item number
         *
         * @designToken steps.item.number.background
         */
        background?: string;
        /**
         * Active background of item number
         *
         * @designToken steps.item.number.active.background
         */
        activeBackground?: string;
        /**
         * Border color of item number
         *
         * @designToken steps.item.number.border.color
         */
        borderColor?: string;
        /**
         * Active border color of item number
         *
         * @designToken steps.item.number.active.border.color
         */
        activeBorderColor?: string;
        /**
         * Color of item number
         *
         * @designToken steps.item.number.color
         */
        color?: string;
        /**
         * Active color of item number
         *
         * @designToken steps.item.number.active.color
         */
        activeColor?: string;
        /**
         * Size of item number
         *
         * @designToken steps.item.number.size
         */
        size?: string;
        /**
         * Font size of item number
         *
         * @designToken steps.item.number.font.size
         */
        fontSize?: string;
        /**
         * Font weight of item number
         *
         * @designToken steps.item.number.font.weight
         */
        fontWeight?: string;
        /**
         * Border radius of item number
         *
         * @designToken steps.item.number.border.radius
         */
        borderRadius?: string;
        /**
         * Shadow of item number
         *
         * @designToken steps.item.number.shadow
         */
        shadow?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<StepsDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface StepsDesignTokens extends DesignTokens<StepsDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: StepsTokenSections.Root;
    /**
     * Used to pass tokens of the separator section
     */
    separator?: StepsTokenSections.Separator;
    /**
     * Used to pass tokens of the item link section
     */
    itemLink?: StepsTokenSections.ItemLink;
    /**
     * Used to pass tokens of the item label section
     */
    itemLabel?: StepsTokenSections.ItemLabel;
    /**
     * Used to pass tokens of the item number section
     */
    itemNumber?: StepsTokenSections.ItemNumber;
}
