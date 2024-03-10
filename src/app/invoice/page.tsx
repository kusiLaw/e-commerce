import Invoice from '@/components/orders/invoice'
import React from 'react'
import Orders from '@/components/orders/order'
const OrderInvoice = () => {
  return (
    <div>
      {/* <Invoice/> */}
      <Orders orderStatus={'placed'}/>
      </div>
  )
}

export default OrderInvoice