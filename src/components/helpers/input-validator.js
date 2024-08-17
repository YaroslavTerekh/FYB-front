import React from "react";

export function InputValidation(formRef: any){
    const inputValidator = (value: string) => {
        if (formRef?.current && formRef?.current?.elements?.namedItem) {
            const field = formRef?.current?.elements?.namedItem(value);

            if (field && field?.validity?.valid) {
                return field?.validity?.valid;
            }

            return false;
        }
    };

    return {
        inputValidator,
    }
}


