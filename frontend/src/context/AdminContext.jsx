import { createContext } from "react";

const AdminContext = createContext();


export default AdminContext;


export const AdminProvider = ({children}) => {




    const ContextData ={

    }

    return(
        <AdminContext.Provider value={ContextData} > {children}</AdminContext.Provider>
    )
}