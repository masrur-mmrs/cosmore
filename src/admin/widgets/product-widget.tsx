import React, { useState } from "react"
import type { ProductDetailsWidgetProps, WidgetConfig} from "@medusajs/admin"
import { useAdminUpdateProduct } from "medusa-react"
import CreateTable from "../components/shared/createTable"
import { Chart } from "../components/shared/chart"
import { Button } from "@medusajs/ui"


const ProductWidget = ({ product, notify }: ProductDetailsWidgetProps) => {
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);

  const [chartVisibility, setChartVisibility] = useState<boolean>(false);

  const [customValue, setCustomValue] = useState("");
  const [productDetails, setProductDetails] = useState({});


  const updateProduct = useAdminUpdateProduct(product.id)
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    updateProduct.mutate({
      customAttribute: customValue,
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
      <Chart visible={chartVisibility} rows={rows} columns={columns}/>
      {/* <form>
        <label htmlFor="customAttributeValue">Value:</label>
        <br/>
        <input
        className="pt-1 px-4 pb-1 block border bg-ui-bg-field rounded-md mt-1 appearence-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover" 
        type="text"
        placeholder="Custom attribute"
        value={customValue} 
        onChange={(e)=>setCustomValue(e.target.value)} 
        id="customAttributeValue"
        autoComplete="off"
        />
        <br/>
        <button className="bg-black text-white p-1 rounded-md" onClick={handleSubmit} type="submit">Submit</button>
      </form> */}
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "product.details.before",
}

export default ProductWidget