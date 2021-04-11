export default async function userGetPosts (req, res) {

    if (req.method !== "GET") return res.status(200).json("This route support only GET method!");


    console.log("req.cookies", req.cookies);


    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            res.status(200).json(json)
        })


}