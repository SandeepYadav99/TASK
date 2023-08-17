interface User {
  email: string;
  id: {
    value: number;
    name: string
  };
  gender: string ;
  cell: number;
  login: {
    uuid: string;
  };
  picture: {
    large: string | undefined;
    thumbnail: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
}

export default User