/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const AllTheProviders: React.FC = ({ children }) => (
    <>
        {/* Can add in translation providers or global store here */}
        {children}
    </>
);

const customRender = (
    ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    options: any
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
