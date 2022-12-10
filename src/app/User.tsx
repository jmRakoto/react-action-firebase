import { useState, useEffect, FC } from "react";
import axios from "axios";
import { IUser } from "./interface/user";

const User: FC = (): any => {
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const results = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(results.data);
    })();
  }, []);

  return userList.length ? (
    userList.map((data: IUser, index: number) => (
      <div key={index} data-testid="user">
        <p>Id: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
        <hr />
      </div>
    ))
  ) : (
    <div>Loading ...</div>
  );
};

export default User;
