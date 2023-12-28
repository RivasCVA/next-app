import { forwardRef, InputHTMLAttributes } from 'react';
import cn from '@utils/cn';

export type Ref = HTMLInputElement;

export type Props = InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
};

const TextField = forwardRef<Ref, Props>((props, ref) => {
    const { error, className, ...rest } = props;
    return (
        <input
            className={cn(
                'font-text-1 focus-visible:focus-ring h-10 w-80 rounded-md border-2 px-3 py-2 text-neutral-700 placeholder:text-neutral-400',
                error ? 'border-red-600' : 'border-neutral-700',
                className,
            )}
            ref={ref}
            {...rest}
        />
    );
});

TextField.displayName = 'TextField';

export default TextField;
