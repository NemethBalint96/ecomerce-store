import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("0d2eaac0-788f-4922-81a4-8a9abd14efb1")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 s:px-6 lg:px-8">
          <ProductList
            title="Featured products"
            items={products}
          />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
