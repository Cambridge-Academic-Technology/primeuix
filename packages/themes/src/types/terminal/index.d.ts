/**
 *
 * Terminal Design Tokens
 *
 * @module terminal
 *
 * Figma UI Kit
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
declare namespace TerminalTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken terminal.background
         */
        background?: string;
        /**
         * Border color of root
         *
         * @designToken terminal.border.color
         */
        borderColor?: string;
        /**
         * Color of root
         *
         * @designToken terminal.color
         */
        color?: string;
        /**
         * Height of root
         *
         * @designToken terminal.height
         */
        height?: string;
        /**
         * Padding of root
         *
         * @designToken terminal.padding
         */
        padding?: string;
        /**
         * Border radius of root
         *
         * @designToken terminal.border.radius
         */
        borderRadius?: string;
    }

    interface Prompt {
        /**
         * Gap of prompt
         *
         * @designToken terminal.prompt.gap
         */
        gap?: string;
    }

    interface CommandResponse {
        /**
         * Margin of command response
         *
         * @designToken terminal.command.response.margin
         */
        margin?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<TerminalDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface TerminalDesignTokens extends DesignTokens<TerminalDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: TerminalTokenSections.Root;
    /**
     * Used to pass tokens of the prompt section
     */
    prompt?: TerminalTokenSections.Prompt;
    /**
     * Used to pass tokens of the command response section
     */
    commandResponse?: TerminalTokenSections.CommandResponse;
}
