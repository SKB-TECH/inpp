import React from 'react'
import { useRouter } from 'next/router';

const OeuvresItems = () => {
    const router = useRouter();

    return (
        <div>
            Oeuvres Items

            <button onClick={() => router.push({
                pathname: '/detail', query: {
                    id: 2,
                }
            })}>
                Voir plus
            </button>
        </div>
    )
}

export default OeuvresItems