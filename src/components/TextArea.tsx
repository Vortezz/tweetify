import React, {useState} from "react";

export function TextArea({name, label, value, onChange, placeholder}: TextAreaProps) {
    return (
        <div className={"w-[calc(90%)] max-w-[calc(25rem)] mx-auto"}>
            <label className={"text-white"} htmlFor={name}>{label}</label>
            <div className="flex mb-4 h-15 bg-white rounded-lg px-2 text-vortezz-gray2">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full flex-1 h-40 p-1 relative text-xl outline-none"
                />
            </div>
        </div>
    );
}

export interface TextAreaProps {
    label: string;
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}