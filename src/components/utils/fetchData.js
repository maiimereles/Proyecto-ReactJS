export const fetchData = (data) => 
{
    return new Promise ((resolve, reject)=>
    setTimeout(() => {
        resolve (data)
    },)
    )
}