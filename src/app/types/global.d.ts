declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare const _IS_DEV__: boolean;
declare const _API__: string;
declare const _PROJECT__: 'frontend' | 'storybook' | 'jest';
type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
type OptionalRecord<K extends keyof any, T> = {
    [P in K]?:T
};
