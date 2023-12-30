'use client';

import { FC, FocusEvent, createRef, useEffect, useState } from 'react';
import cn from '@utils/cn';
import { View } from '@components/Layout';
import Button from '@components/Button';
import { useClickOutside, useKeyNavigation } from '@hooks';
import DropdownOption from './DropdownOption';

export type Props = {
    options: string[];
    selections?: string[];
    onSelections?: (selections: string[]) => void;
    placeholder?: string;
    multi?: boolean;
};

const Dropdown: FC<Props> = (props) => {
    const { options, selections = [], onSelections, placeholder, multi } = props;
    const [expanded, setExpanded] = useState<boolean>(false);
    const containerRef = createRef<HTMLDivElement>();

    const { itemRefs, handleKeyDown, resetFocusedItem } = useKeyNavigation(options.length, () => setExpanded(false));

    useClickOutside(() => setExpanded(false), containerRef, !expanded);

    useEffect(() => {
        if (expanded) {
            resetFocusedItem();
        }
    }, [expanded, resetFocusedItem]);

    const handleBlur = (e: FocusEvent) => {
        if (!containerRef.current?.contains(e.relatedTarget)) {
            setExpanded(false);
        }
    };

    const handleToggleClick = () => {
        setExpanded(!expanded);
    };

    const handleOptionClick = (option: string) => {
        setExpanded(false);
        if (!onSelections) {
            return;
        }
        if (multi) {
            const selectionsSet = new Set(selections);
            if (selectionsSet.has(option)) {
                selectionsSet.delete(option);
            } else {
                selectionsSet.add(option);
            }
            onSelections(Array.from(selectionsSet));
        } else {
            onSelections([option]);
        }
    };

    const getToggleText = () => {
        if (selections.length > 0) {
            if (selections.length === 1) {
                return selections[0];
            }
            return `${selections.length} selections`;
        }
        return placeholder || 'Select';
    };

    return (
        <View ref={containerRef} className="relative w-40" onBlur={handleBlur} onKeyDown={handleKeyDown}>
            <Button
                className={cn('w-full active:transform-none', expanded ? 'rounded-b-none' : 'rounded-b-md')}
                onClick={handleToggleClick}
                iconRight={expanded ? 'caret-up' : 'caret-down'}
            >
                {getToggleText()}
            </Button>
            {expanded && (
                <View
                    as="ul"
                    className="absolute top-full max-h-44 w-full list-none gap-y-1 rounded-sm rounded-t-none bg-neutral-700 px-1 pb-1"
                >
                    {options.map((option, i) => (
                        <View as="li" className="w-full" key={`${option}-${i}`}>
                            <DropdownOption
                                ref={(el) => (itemRefs.current[i] = el)}
                                option={option}
                                selected={selections.includes(option)}
                                onClick={handleOptionClick}
                            />
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

export default Dropdown;
