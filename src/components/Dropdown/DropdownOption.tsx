import { forwardRef } from 'react';
import cn from '@utils/cn';
import Button from '@components/Button';

type Ref = HTMLButtonElement;

type Props = {
    option: string;
    selected: boolean;
    onClick?: (option: string) => void;
};

const DropdownOption = forwardRef<Ref, Props>((props, ref) => {
    const { option, selected, onClick } = props;

    const handleClick = () => {
        onClick?.(option);
    };

    return (
        <Button
            ref={ref}
            className={cn(
                'w-full rounded-none border-0 bg-white hover:bg-neutral-100 focus:bg-neutral-100 focus-visible:outline-none active:transform-none',
                selected ? 'justify-between' : 'justify-start',
            )}
            onClick={handleClick}
            variant="outline"
            iconRight={selected ? 'done' : undefined}
        >
            {option}
        </Button>
    );
});

DropdownOption.displayName = 'DropdownOption';

export default DropdownOption;
