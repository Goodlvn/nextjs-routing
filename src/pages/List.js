import Link from "next/link";

export default function List({ ownersList }) {
    return (
        <div>

            {console.log(ownersList)}
            {ownersList.map((e, index) => {
                return (
                    <div key={index}>
                        <Link href={`/${e.vehicle}/${e.ownerName}`} >
                            <a> Navigate to {e.ownerName}'s {e.vehicle}</a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

List.getInitialProps = async () => {
    const response = await fetch("http://localhost:4001/vehicles");
    const ownersList = await response.json();
    return { ownersList: ownersList }
}