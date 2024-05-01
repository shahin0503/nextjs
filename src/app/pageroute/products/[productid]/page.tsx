export default function ProductDetail({
    params
}: {
    params: {
        productid: string
    }
}) {
    return <h1>Product details {params.productid}</h1>
}