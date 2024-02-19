import React, { useEffect, useState } from 'react'
import Pagination from '../Component/Pagination'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Component/Header';
import '../Style/ProductList.css'
function Product1() {
    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    let { page } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`);
                setProduct(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const storedData = localStorage.getItem('limit');
        if (storedData) {
            setLimit(JSON.parse(storedData));
        }

        fetchData();
    }, [currentPage, limit]);

    useEffect(() => {

        if (!isNaN(page)) {
            page = Number(page);
        } else {
            page = 1;
        }

        if (page !== 1 && currentPage !== page) {
            setCurrentPage(page)
        }
    }, []);

    const ChangeNextPage = (page) => {
        window.history.pushState(null, null, `${page + 1} `);
        setCurrentPage(page + 1);
    }
    const ChangePreviousPage = (page) => {
        window.history.pushState(null, null, `${page - 1} `);
        setCurrentPage(page - 1);
    }
    const receiveDataFromChild = (e) => {
        localStorage.setItem('limit', JSON.stringify(e.target.value));
        window.history.pushState(null, null, `${1} `);
        setLimit(e.target.value)
        setCurrentPage(1);
    };
    return (
        <div>
            <Header />
            <div className='section2'>
                <div className='pagi'>
                    <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
                </div>
                <div className='sub-section2'>
                    <div className='title'>
                        <h1>Products</h1>
                    </div>
                    <div className='limit'>
                        <div>
                            <select id="cars" className='select' onChange={receiveDataFromChild}>
                                <option value="12" >12</option>
                                <option value="8">8</option>
                                <option value="18" >18</option>
                                <option value="24" >24</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='prduct-list'>
                {product.map((e, i) => {
                    return (
                        <div className='sec1' key={i}>
                            <Link to={`/Product/${e.id}`} className='link '>
                                <div className='sub-sec1'>
                                    <div className="card-img-top ">
                                        <img src={e.images[0]} className="img2" alt="..." />
                                    </div>
                                    <div className='sec1'>
                                        <h4 className='a2'>{e.title}</h4>
                                    </div>
                                    <div className='sec1'>
                                        <p className='a2'>Price:-{e.price}</p>
                                    </div>
                                    <div className='sec1'>
                                        <button className='productlist-btn'><Link to={`/Product/${e.id} `} className='link '>More</Link></button>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                })}

            </div >
            <div className='section2 section3'>
                <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
            </div>
        </div >
    )
}

export default Product1