/* import { ComponentPropsOptions, DefineComponent } from 'vue';

type CustomProps = {
    [key: string]: ComponentPropsOptions;
} | undefined

export interface ImportedComponent extends DefineComponent {
    options?: {
        props?: {
            [key: string]: ComponentPropsOptions;
        };
    };
}



export const extractPropsFromComponentSettings = (customPropsValues: CustomProps, component: ImportedComponent): CustomProps => {
    if (!customPropsValues) {
        return undefined;
    }

    const componentProps = component?.options?.props;
    const customProps: CustomProps = {};

    Object.keys(customPropsValues).forEach((propName: string) => {
        const defaultProp = componentProps ? componentProps[propName] : undefined;
        const newDefaultValue = customPropsValues[propName];
        customProps[propName] = {
            type: defaultProp?.type,
            default: ['object', 'function'].includes(typeof newDefaultValue)
                ? () => newDefaultValue
                : newDefaultValue,
        };
    });

    if (Object.keys(customProps).length) {
        return customProps;
    }

    return undefined;
}; */