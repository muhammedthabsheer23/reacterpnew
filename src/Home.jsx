import React from 'react'
import Navbar from './Navbar'

function Home({Toggle}) {
  return (
    <div className=' px-3'>
        <Navbar Toggle={Toggle}/>
        <div className='container--fluid'>
<div className='row g-3 my-2'>
    <div className='col-md-3 p-1'>
        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
                <p className='fs-2'>230</p>
                <p className='fs-5'>Products</p>
            </div>
            <i className='bi bi-cart-plus p-3 fs-1'></i>
        </div>
    </div>
    <div className='col-md-3 p-1'>
        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
                <p className='fs-2'>230545</p>
                <p className='fs-5'>sales</p>
            </div>
            <i className='bi bi-currency-collar p-3 fs-1'></i>
        </div>
    </div>
    <div className='col-md-3 p-1'>
        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
                <p className='fs-2'>230</p>
                <p className='fs-5'>Delivery</p>
            </div>
            <i className='bi bi-truck p-3 fs-1'></i>
        </div>
    </div>
    <div className='col-md-3 p-1'>
        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
                <p className='fs-2'>20%</p>
                <p className='fs-5'>Increase</p>
            </div>
            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
        </div>
    </div>
</div>
        </div>
        <table class="table caption-top bg-white rounded mt-2">
            <caption className='text-white fs-4'>Recent Orders</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Home