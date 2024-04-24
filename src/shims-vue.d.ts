/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.txt' {
    const str: string
    export default str
}

declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare interface Window {
    moYu: any
    _AMapSecurityConfig: string | undefined
    createMap: (key: string | undefined, msgId: string, point: {
        lat: number,
        lng: number
    }) => void
}
