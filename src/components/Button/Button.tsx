import { ButtonHTMLAttributes, FC } from 'react';
import cn from '@utils/cn';
import Icon from '@components/Icon';
import { Text } from '@components/Typography';
import { ButtonColor, ButtonVariant, ButtonStyles } from './utils';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
    iconLeft?: string;
    iconRight?: string;
};

const Button: FC<Props> = (props) => {
    const { children, className, variant = 'solid', color = 'primary', iconLeft, iconRight, disabled, ...rest } = props;

    const canRenderIcons = variant !== 'basic';

    const renderIcon = (name: string) => <Icon className="w-6 flex-shrink-0" name={name} />;

    return (
        <button
            className={cn(
                'flex h-10 w-40 items-center gap-x-2 rounded-md px-3 transition-all duration-200 active:scale-[0.9875]',
                canRenderIcons && (iconLeft || iconRight) ? 'justify-between' : 'justify-center',
                ButtonStyles[variant][color],
                { 'pointer-events-none opacity-80': disabled },
                className,
            )}
            disabled={disabled}
            {...rest}
        >
            {canRenderIcons && iconLeft !== undefined && renderIcon(iconLeft)}
            {typeof children === 'string' ? <Text className="truncate">{children}</Text> : children}
            {canRenderIcons && iconRight !== undefined && renderIcon(iconRight)}
        </button>
    );
};

export default Button;
