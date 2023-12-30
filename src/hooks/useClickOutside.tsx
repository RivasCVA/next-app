import { RefObject, useEffect } from 'react';

/**
 * A hook that runs a callback each time a click occurs outside a given element.
 * @param callback The callback function to run on an outside click.
 * @param ref The element ref to watch for outside click events.
 * @param disabled An optional field that disables outside click events when true.
 */
const useClickOutside = (callback: () => void, ref: RefObject<HTMLElement | null>, disabled = false): void => {
    useEffect(() => {
        const check = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        };
        if (disabled) {
            document.removeEventListener('click', check);
        } else {
            document.addEventListener('click', check);
        }
        return () => {
            document.removeEventListener('click', check);
        };
    }, [callback, ref, disabled]);
};

export default useClickOutside;
