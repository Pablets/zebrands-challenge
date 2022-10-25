import M from 'materialize-css';
import { createContext, Context, useContext } from 'react';

export const MContext: Context<typeof M> = createContext(null);
export const useMContext = () => useContext(MContext);
