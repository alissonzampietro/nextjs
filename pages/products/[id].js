import {useRouter} from 'next/router'; 

function Products() {
    const router = new useRouter();
    const id = router.query.id

    return <div>O id do produto é {id}</div>
}

module.exports = Products;