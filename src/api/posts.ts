const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPost = async (id: number) => fetch(`${BASE_URL}/${id}`).then((res) => res.json());