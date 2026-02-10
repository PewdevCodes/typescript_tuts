// Pick :: allows to pick specific properties from an object

interface User111 {
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProp = Pick<User111 , 'name' | 'email' | 'age'>;

function updateUser(user: User111, updates: UpdateProp): User111 {
    return { ...user, ...updates };
};



// Partial  :: allows to make all properties of an object optional

interface User11 {    
    Pname?: string;
    Page?: number;
    Pemail?: string;
    Ppassword?: string;
}; 

// Readonly :: makes all properties of an object read-only

interface UserReadOnly {    
    readonly name: string;
    readonly age: number;
    readonly email: string;
    readonly password: string;
}


interface Config { 
    readonly endpoint: string;
    readonly apiKey: string;
    timeout: number;
};

const config: Readonly<Config> = {
    endpoint: "https://api.example.com",
    apiKey: "1234567890",
    timeout: 5000
};


// Record :: allows to create a type with specified keys and values

type UserRecord = Record<string, User>;

const userRecord: UserRecord = {
    '1': { name1: 'Alice', age: 30, email: 'alice@example.com', password: 'password123' },
    '2': { name1: 'Bob', age: 25, email: 'bob@example.com', password: 'password456' }
};



// Maps :: allows to create a type with specified keys and values, but the keys can be of any type


type Map<K, V> = {
    [key: string]: V;
};


type User = { 
    id : string;
    username : string;
};

type Users = { 
    [keys : string] : User;
};

const userz = {
  '1': {
    id: '1',
    username: 'Alice',
  },
  '2': {
    id: '2',
    username: 'Bob',
  },
};


// Exclude :: allows to exclude specific properties from a type

