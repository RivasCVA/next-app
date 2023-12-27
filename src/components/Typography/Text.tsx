import { FC, HTMLAttributes } from 'react';
import cn from '@utils/cn';

type Props = HTMLAttributes<HTMLParagraphElement> & {
    level?: 1 | 2 | 3;
};

const Text: FC<Props> = (props) => {
    const { children, className, level = 1, ...rest } = props;
    return (
        <p
            className={cn(
                'text-left',
                {
                    'font-text-1': level === 1,
                    'font-text-2': level === 2,
                    'font-text-3': level === 3,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </p>
    );
};

export default Text;
