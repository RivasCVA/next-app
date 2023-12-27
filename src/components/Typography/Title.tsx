import { FC, HTMLAttributes } from 'react';
import cn from '@utils/cn';

type Props = HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3;
};

const Title: FC<Props> = (props) => {
    const { children, className, level = 1, ...rest } = props;
    return (
        <h1
            className={cn(
                'text-center',
                {
                    'font-title-1': level === 1,
                    'font-title-2': level === 2,
                    'font-title-3': level === 3,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </h1>
    );
};

export default Title;
