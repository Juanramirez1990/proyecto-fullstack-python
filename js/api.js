const getNombreAxios = async(idPost) => {
    try {
        console.log("RRHH")
        console.log("http://jsonplaceholder.typicode.com/users");
        const resPost = await axios(`http://jsonplaceholder.typicode.com/posts/${idPost}`);
        console.log("Legajo de empleado");
        console.log(resPost.data.id);
        const resUser = await axios(`http://jsonplaceholder.typicode.com/users/${resPost.data.id}`);
        console.log(resUser.data.name);
    } catch (error) {
        console.log(error);
    }
 
}
getNombreAxios(5);