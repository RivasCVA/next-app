import { forwardRef, ButtonHTMLAttributes } from 'react';
import cn from '@utils/cn';
import Icon from '@components/Icon';
import { Text } from '@components/Typography';
import { ButtonColor, ButtonVariant, ButtonStyles } from './utils';

export type Ref = HTMLButtonElement;

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
    iconLeft?: string;
    iconRight?: string;
};

const Button = forwardRef<Ref, Props>((props, ref) => {
    const { children, className, variant = 'solid', color = 'primary', iconLeft, iconRight, disabled, ...rest } = props;

    const canRenderIcons = variant !== 'basic';

    const renderIcon = (name: string) => <Icon className="w-6 flex-shrink-0" name={name} />;

    return (
        <button
            ref={ref}
            className={cn(
                'focus-visible:focus-ring flex h-10 w-40 items-center gap-x-2 rounded-md px-3 transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.9875]',
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
});

Button.displayName = 'Button';

export default Button;
