import { useState } from 'react'
import UserForm from "../../components/User/UserForm";
import UserList from "../../components/User/UserList";
import fetchUserLists from '../../hoc/fetchUserLists';

export const Home = () => {
    const [defaultNumber, setDefaultNumber] = useState<number>(50);
    const [filteredGender, setFilteredGender] = useState<string | null>(null);
    const { isLoading, userLists } = fetchUserLists(defaultNumber, filteredGender);

    const onUserChangeNumber = (userInput: number) => {
        setDefaultNumber(userInput)
    }

    return (
        <div className="">
            <UserForm onUserChangeNumber={onUserChangeNumber} defaultNumber={defaultNumber} />
            <UserList userLists={userLists} filteredGender={filteredGender ?? " "} setFilteredGender={setFilteredGender} isLoading={isLoading} />
        </div>
    )
}
