import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import ReactQuery1 from "./ReactQuery1";
const ReactQuery = () => {
    const queryClient= new QueryClient();
    return  (
        <QueryClientProvider client={queryClient}>
            <ReactQuery1 />
        </QueryClientProvider>
    );
};
export default ReactQuery;