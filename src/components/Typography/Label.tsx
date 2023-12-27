import { FC, HTMLAttributes } from 'react';
import cn from '@utils/cn';

type Props = HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3;
};

const Label: FC<Props> = (props) => {
    const { children, className, level = 1, ...rest } = props;
    return (
        <h3
            className={cn(
                'text-center',
                {
                    'font-label-1': level === 1,
                    'font-label-2': level === 2,
                    'font-label-3': level === 3,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </h3>
    );
};

export default Label;
