import { FC, HTMLAttributes } from 'react';
import cn from '@utils/cn';

type Props = HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3;
};

const Heading: FC<Props> = (props) => {
    const { children, className, level = 1, ...rest } = props;
    return (
        <h2
            className={cn(
                'text-center',
                {
                    'font-heading-1': level === 1,
                    'font-heading-2': level === 2,
                    'font-heading-3': level === 3,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </h2>
    );
};

export default Heading;
