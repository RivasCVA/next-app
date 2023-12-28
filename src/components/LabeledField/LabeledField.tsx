import { FC, ReactNode } from 'react';
import cn from '@utils/cn';
import { View } from '@components/Layout';
import { Label, Text } from '@components/Typography';

export type Props = {
    children: ReactNode;
    className?: string;
    label: string;
    description?: string;
    error?: string;
};

const LabeledField: FC<Props> = (props) => {
    const { children, className, label, description, error } = props;
    return (
        <View className={cn('w-min items-start gap-y-1', className)}>
            <Label level={2}>{label}</Label>
            {description !== undefined && (
                <Text className="-mt-1 text-neutral-500" level={2}>
                    {description}
                </Text>
            )}
            {children}
            {error !== undefined && (
                <Text className="text-left text-red-600" level={2}>
                    {error}
                </Text>
            )}
        </View>
    );
};

export default LabeledField;
