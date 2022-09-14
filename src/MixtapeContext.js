import { createContext, useState } from "react"

export const MixtapeContext = createContext()

export function MixtapeProvider({ children, songs }) {

    const [genre, setGenre] = useState("all")
    const [sortOrder, setSortOrder] = useState("ascending")

    return (
        <MixtapeContext.Provider value={{ songs, genre, setGenre, sortOrder, setSortOrder }}>
            {children}
        </MixtapeContext.Provider>
    )
}