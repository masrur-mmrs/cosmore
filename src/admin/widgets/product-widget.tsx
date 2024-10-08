import React, { useState, useEffect } from "react"
import type { ProductDetailsWidgetProps, WidgetConfig} from "@medusajs/admin"
import { useAdminUpdateProduct } from "medusa-react"
import CreateTable from "../components/shared/createTable"
import { Chart } from "../components/shared/chart"
import { Button } from "@medusajs/ui"

const ProductWidget: React.FC<ProductDetailsWidgetProps> = ({ product, notify }) => {
  const updateProduct = useAdminUpdateProduct(product.id);
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);
  const [chartVisibility, setChartVisibility] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<object>(product.productDetails);

  useEffect(() => {
    if (product.productDetails !== undefined && 'chartArray' in product.productDetails) {
      setChartVisibility(true);
      setRows(product.productDetails.chartArray.length);
      setColumns(product.productDetails.chartArray[0].length);
    }
  }, [product.productDetails]);

  useEffect(() => {
    if (productDetails) {
      setChartData(productDetails);
    }
  }, [productDetails]);

  const setChartData = (productDetails: object) => {
    updateProduct.mutate({
      productDetails: productDetails,
    }, {
      onSuccess: () => {
        notify.success("Success!", "Size chart updated successfully")
      }
    })
  }

  const handleSetChartData = (chartArray: string[][]) => {
    setProductDetails(prevState => ({
      ...prevState,
      ['chartArray']: chartArray,
    }));
  }

  return (
    <div className="bg-white p-8 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Size Chart</h3>
      {!chartVisibility && <CreateTable rows={rows} columns={columns} setRows={setRows} setColumns={setColumns}/>}
      <Button
        className="mt-2 bg-[#121212] hover:bg-[#2b2b2b] text-white"
        variant="secondary"
        onClick={() => setChartVisibility(!chartVisibility)}
      >
        {chartVisibility ? 'Change Dimensions' : 'Create Chart'}
      </Button>
      <Chart visible={chartVisibility} rows={rows} columns={columns} productDetails={productDetails} handleSetChartData={handleSetChartData}/>
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "product.details.after",
}

export default ProductWidget