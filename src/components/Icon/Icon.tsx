'use client';

import cn from '@utils/cn';
import { FC, SVGProps, FunctionComponent, useEffect, useRef, useState } from 'react';

type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

export type Props = {
    name: string;
    className?: string;
};

const Icon: FC<Props> = (props) => {
    const { name, className, ...rest } = props;
    const ImportedIconRef = useRef<SVGComponent | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const importIcon = async () => {
            try {
                setLoading(true);
                const imported = await import(`@assets/icons/${name}.svg`);
                ImportedIconRef.current = imported.default;
            } catch (error) {
                console.error(`Icon not found: "${name}"`);
            } finally {
                setTimeout(() => setLoading(false));
            }
        };
        importIcon();
    }, [name]);

    if (loading || !ImportedIconRef.current) {
        return null;
    }

    const { current: ImportedIcon } = ImportedIconRef;

    return (
        <span className={cn('flex aspect-square w-10 items-center justify-center', className)} {...rest}>
            <ImportedIcon name={name} />
        </span>
    );
};

export default Icon;
