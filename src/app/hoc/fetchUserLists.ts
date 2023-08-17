/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import User from '../@types/user';
import { useActions, useAppSelector } from '../hooks/useActions';


const fetchUserLists = (defaultNumber: number, filteredGender: string | null) => {
  const [userLists, setUserLists] = useState<User[]>([]);
  const isLoading = useAppSelector((state) => state.loader.loader);
  const { setIsLoading } = useActions();

  const fetchUser = async () => {
    try {
      let url = `https://randomuser.me/api/?results=${defaultNumber}`;
      if (filteredGender) {
        url += `&gender=${filteredGender}`;
      }
      const userListsResponse = await fetch(url);
      if (userListsResponse.ok) {
        setIsLoading(true);
        const responseData = await userListsResponse.json();
        setUserLists(responseData.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [defaultNumber, filteredGender]);

  return { userLists, isLoading };
};

export default fetchUserLists;
