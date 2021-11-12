import React from 'react';
import { IGlobalState, IProcessus, IUser } from 'types';
import { initialState } from 'utils/constants';

interface IProps {
    children: React.ReactNode;
}

const globalContext = React.createContext(initialState );



export const GlobalProvider = (props: IProps) => {
    
    const [global, setGlobal] = React.useState<IGlobalState>(initialState)

    const changeProcessus = (processus: IProcessus) => {
        setGlobal({...global, currentProcessus: processus})
    }

    const changeAnnee = (annee: number) => {
        setGlobal({...global, annee})
    }

    const changePeriode = (periode: {start: number, end:number }) => {
        setGlobal({...global, periode})
    }

    const changeUser = (user: IUser) => {
        setGlobal({...global, user})
    }

    return (
        <globalContext.Provider value={{ ...global, changeAnnee,changePeriode,changeProcessus,changeUser }}>
            {React.Children.only(props.children)}
        </globalContext.Provider>
    )
}

export const useGlobal = () => React.useContext(globalContext);