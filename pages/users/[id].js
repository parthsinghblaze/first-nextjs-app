export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    const paths = data.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { singleUser: data }
    }


}
function UserData({ singleUser }) {
    return <div>
        <h2>{singleUser.name}</h2>
    </div>
}

export default UserData