export type ButtonVariant = 'solid' | 'outline' | 'basic';

export type ButtonColor = 'primary' | 'secondary' | 'danger';

const BasicButtonStyles = 'h-fit w-fit p-0 gap-0';

export const ButtonStyles = {
    solid: {
        primary: 'bg-neutral-700 text-neutral-100 hover:bg-neutral-600',
        secondary: 'bg-cyan-700 text-neutral-100 hover:bg-cyan-600',
        danger: 'bg-red-600 text-neutral-100 hover:bg-red-500',
    },
    outline: {
        primary: 'border-4 border-neutral-700 text-neutral-700 hover:border-neutral-600 hover:text-neutral-600',
        secondary: 'border-4 border-cyan-700 text-cyan-700 hover:border-cyan-600 hover:text-cyan-600',
        danger: 'border-4 border-red-600 text-red-600 hover:border-red-500 hover:text-red-500',
    },
    basic: {
        primary: BasicButtonStyles,
        secondary: BasicButtonStyles,
        danger: BasicButtonStyles,
    },
} satisfies Record<ButtonVariant, Record<ButtonColor, string>>;
