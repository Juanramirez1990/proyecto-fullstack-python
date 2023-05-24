const getNombreAxios = async(idPost) => {
    try {
        console.log("http://jsonplaceholder.typicode.com/users");
        const resPost = await axios(`http://jsonplaceholder.typicode.com/posts/${idPost}`);
        console.log(resPost.data.userId);
        const resUser = await axios(`http://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
        console.log(resUser.data.name);
    } catch (error) {
        console.log(error);
    }
}
getNombreAxios(52);