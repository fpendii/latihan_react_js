import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";

const Products = [
    {
        id: 1,
        title: 'Sepatu Baru',
        price: 'Rp.1.000.000',
        image: 'sepatu2.jpg',
        deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium, quidem porro blanditiis ut quaerat at non vitae obcaecati optio sequi aut nesciunt tenetur, quia dicta dignissimos ea quisquam unde!`,
        status : 'sold-out' 
    },
    {
        id: 2,
        title: 'Sepatu Lama',
        price: 'Rp.4.000.000',
        image: 'sepatu1.jpg',
        deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium, quidem porro blanditiis ut quaerat at non vitae obcaecati optio sequi aut nesciunt tenetur, quia dicta dignissimos ea quisquam unde!`,
        status : 'sold-out' 
    },
    {
        id: 3,
        title: 'Sepatu Baru',
        price: 'Rp.1.000.000',
        image: 'sepatu2.jpg',
        deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium, quidem porro blanditiis ut quaerat at non vitae obcaecati optio sequi aut nesciunt tenetur, quia dicta dignissimos ea quisquam unde!`,
        status : 'sold-out' 
    },
    {
        id: 4,
        title: 'Sepatu Baru',
        price: 'Rp.1.000.000',
        image: 'sepatu1.jpg',
        deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium, quidem porro blanditiis ut quaerat at non vitae obcaecati optio sequi aut nesciunt tenetur, quia dicta dignissimos ea quisquam unde!`,
        status : 'sold-out' 
    },
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {Products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body title={product.title}>
                        {product.deskripsi}
                    </CardProduct.Body>
                    <CardProduct.Footer type={product.status}>{product.price}</CardProduct.Footer>
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage