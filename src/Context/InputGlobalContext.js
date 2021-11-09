import React, {createContext, useState, useContext, useCallback} from "react";

const InputGlobalStateContext = createContext();

export default function InputGlobalStateProvider({children}) {
    const [fields, setFields] = useState({})

    const onSubmit = useCallback((data) => {
        setFields(oldstate => [...oldstate, data])
    });


    return (
        <InputGlobalStateContext.Provider
        value={{
            fields
        }}>
            {children}
        </InputGlobalStateContext.Provider>
    );
}

export function useInputGlobalState() {
    const context = useContext(InputGlobalStateContext);
    const { data, setData } = context;
    return {data, setData};
}