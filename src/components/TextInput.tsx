import React from "react";

export function IconTextInput({name, label, value, onChange, type, placeholder, icon}: IconTextInputProps) {
    return (
        <div className={"w-[calc(90%)] max-w-[calc(25rem)] mx-auto"}>
            <label className={"text-white"} htmlFor={name}>{label}</label>
            <div className="flex mb-4 h-15 bg-white rounded-lg pr-2 text-vortezz-gray2">
                <div className="flex -mr-px justify-center w-15 px-4 py-2">
    <span className="flex bg-white text-2xl text-vortezz-gray4">
    <i className={icon}/>
    </span>
                </div>
                <input
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    className="w-full flex-1 h-10 pr-2 relative text-xl outline-none"
                />
            </div>
        </div>
    );
}

export interface IconTextInputProps {
    label: string;
    icon: string;
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "number";
    placeholder?: string;
}