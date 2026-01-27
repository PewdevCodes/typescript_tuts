// Sync programming

function TaskA() {}

function TaskB() {}

TaskA();
TaskB();

// Async programming

function Task1() {
  setTimeout(() => {
    console.log('Task 1 completed');
  }, 1000);
}

function Task2() {
  console.log('Task 2 completed');
}

Task1();
Task2();

// Promises -- object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const fetchData = (success: boolean = true): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        const data = 'Data fetched successfully';
        resolve(data);
      } else {
        reject('Failed to fetch data');
      }
    }, 2000);
  });
};

fetchData(true)
  .then((data) => {
    console.log(data);
    return 'get more data';
  })
    .then((moreData) => {
    console.log(moreData);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


// Async/Await -- syntactic sugar built on top of Promises, allowing you to write asynchronous code that looks and behaves like synchronous code.

async function fetchDataNew(): Promise<boolean | string> { 
    return 'data fetched successfully using async/await';
}

fetchDataNew()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });


async function getData(): Promise<void> { 
    const newData = await fetchData(true);
    console.log(newData);
}


// Working api with async/await

interface Post { 
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> { 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        console.log(data);
        return data;
     } catch (error) {
        console.log(error);
        return [];
      }
}

fetchData().then((data) => { 
    console.log(data);
}).catch((error) => { 
    console.log(error);
});


