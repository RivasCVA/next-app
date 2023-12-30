import { forwardRef, ComponentRef, ForwardedRef, ReactElement, ComponentPropsWithRef } from 'react';
import cn from '@utils/cn';

type ElementTag = 'div' | 'span' | 'form' | 'ul' | 'ol' | 'li';

const DefaultTag = 'div';

type ElementProps<T extends ElementTag> = ComponentPropsWithRef<T> & { as?: T };

type ElementRef<T extends ElementTag> = ForwardedRef<ComponentRef<T>>;

type GenericElement = <T extends ElementTag = typeof DefaultTag>(
    props: ElementProps<T>,
    ref: ElementRef<T>,
) => ReactElement;

const InnerView: GenericElement = (props, ref) => {
    const { as: Element = DefaultTag, children, className, ...rest } = props;
    return (
        // @ts-expect-error
        <Element
            ref={ref}
            className={cn('flex flex-col items-center', Element === 'div' ? 'w-full' : 'w-auto', className)}
            {...rest}
        >
            {children}
        </Element>
    );
};

const View = forwardRef(InnerView) as GenericElement;

export default View;
