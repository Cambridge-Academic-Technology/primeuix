import { compile, serialize, stringify } from 'stylis';
import minifyCSS from './minifyCSS';

export default function transformCSS(css: string | undefined, params: { prefix?: string; root?: ShadowRoot | HTMLElement } = {}): string | undefined {
    if (!css) {
        return css;
    }

    let transformedCss = css;

    if (params.prefix) {
        if (css.includes(':root') || css.includes(':host')) {
            transformedCss = css.replaceAll(':root,:host', params.prefix).replaceAll(':root', params.prefix).replaceAll(':host', params.prefix);
        } else {
            transformedCss = serialize(compile(`${params.prefix} { ${css} }`), stringify);
        }
    }

    return minifyCSS(transformedCss);
}
