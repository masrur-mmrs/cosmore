import React, { useState } from "react"
import type { ProductDetailsWidgetProps, WidgetConfig} from "@medusajs/admin"
import { useAdminUpdateProduct } from "medusa-react"


const ProductWidget = ({ product, notify }: ProductDetailsWidgetProps) => {
  const [customValue, setCustomValue] = useState("");

  const updateProduct = useAdminUpdateProduct(product.id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    updateProduct.mutate({
      // eslint-disable-next-line
      customAttribute: customValue,
    }, {
      onSuccess: () => {
        notify.success("Success!", "Custom value has been updated")
      }
    })
  }


  return (
    <div className="bg-white p-8 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Custom Attribute</h3>
      <form>
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
      </form>
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "product.details.before",
}

export default ProductWidget