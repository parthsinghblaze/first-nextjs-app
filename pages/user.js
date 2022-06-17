import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return {
        props: { users: data },
    };
};

const User = ({ users }) => {
    return (
        <div>
            <h2>Users</h2>
            {users.map((item) => {
                return (
                    <Link href={`/users/${item.id}`} key={item.id}>
                        <h1>{item.name}</h1>
                    </Link>
                );
            })}
        </div>
    );
}

export default User;
