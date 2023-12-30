import { useEffect, useRef, KeyboardEvent } from 'react';

/**
 * A hook that focuses a list of elements based on arrow keys.
 * @param itemsLength The number of items that will be focusable.
 * @param onClose An optional callback function when the user presses escape.
 */
const useKeyNavigation = (itemsLength: number, onClose?: () => void) => {
    const itemRefs = useRef<Array<HTMLElement | null>>([]);
    const itemIndexRef = useRef<number>(-1);

    useEffect(() => {
        itemRefs.current = new Array<(typeof itemRefs.current)[0]>(itemsLength);
        itemIndexRef.current = -1;
    }, [itemsLength]);

    const focusOption = () => {
        let index = itemIndexRef.current;
        if (index >= itemRefs.current.length) {
            index = 0;
        } else if (index < 0) {
            index = itemRefs.current.length - 1;
        }
        itemRefs.current[index]?.focus();
        itemIndexRef.current = index;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                itemIndexRef.current += 1;
                focusOption();
                e.preventDefault();
                break;
            case 'ArrowUp':
                itemIndexRef.current -= 1;
                focusOption();
                e.preventDefault();
                break;
            case 'Tab':
                itemIndexRef.current += e.shiftKey ? -1 : 1;
                break;
            case 'Escape':
                onClose?.();
                break;
            default:
                break;
        }
    };

    const resetFocusedItem = () => {
        itemIndexRef.current = -1;
    };

    return {
        /**
         * A list of HTML ref elements that will be focusable.
         * Append all elements to be focusable on mount.
         */
        itemRefs,
        /**
         * The key down handler.
         * Pass this method to the parent container of the item ref elements.
         */
        handleKeyDown,
        /**
         * Resets the currently focused index back to none.
         */
        resetFocusedItem,
    };
};

export default useKeyNavigation;
