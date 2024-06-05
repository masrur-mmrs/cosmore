import React, { useState } from "react"
import type { ProductDetailsWidgetProps, WidgetConfig} from "@medusajs/admin"
import { useAdminUpdateProduct } from "medusa-react"
import CreateTable from "../components/shared/createTable"
import { Chart } from "../components/shared/chart"
import { Button } from "@medusajs/ui"


const ProductWidget: React.FC = ({ product, notify }: ProductDetailsWidgetProps) => {
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);

  const [chartVisibility, setChartVisibility] = useState<boolean>(false);

  const [productDetails, setProductDetails] = useState({});


  const updateProduct = useAdminUpdateProduct(product.id)
  

  const setChartData = () => {
    updateProduct.mutate({
      productDetails: productDetails,
    }, {
      onSuccess: () => {
        notify.success("Success!", "Product details have been updated")
      }
    })
  }


  const createChart = () => {
    setChartVisibility(true);
  }

  return (
    <div className="bg-white p-8 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Size Chart</h3>
      <CreateTable rows={rows} columns={columns} setRows={setRows} setColumns={setColumns}/>
      <Button
      className="mt-2"
      onClick={createChart}
      >
        Create Chart
      </Button>
      <Chart visible={chartVisibility} rows={rows} columns={columns} setProductDetails={setProductDetails} setChartData={setChartData}/>
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "product.details.before",
}

export default ProductWidget