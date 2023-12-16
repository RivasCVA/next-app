import { FC, HTMLAttributes } from 'react';
import cn from '@utils/cn';

export type Props = HTMLAttributes<HTMLButtonElement> & {
    error?: boolean;
};

const Button: FC<Props> = (props) => {
    const { children, className, error } = props;
    return (
        <button
            type="button"
            className={cn(
                'h-10 w-full rounded-md bg-neutral-900 text-neutral-50 transition-[background-color] duration-100 hover:bg-neutral-700',
                { 'bg-red-500': error },
                className,
            )}
        >
            {children}
        </button>
    );
};

export default Button;
