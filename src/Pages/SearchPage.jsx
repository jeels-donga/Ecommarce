import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../Component/Header';
import axios from 'axios';
import Pagination from '../Component/Pagination';

function SearchPage() {
    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    let { search } = useParams();
    // console.log(search);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
                setProduct(response.data.products);
                console.log(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const storedData = localStorage.getItem('limit');
        if (storedData) {
            setLimit(JSON.parse(storedData));
        }

        fetchData();
    }, [search, currentPage, limit]);
    // useEffect(() => {

    //     if (!isNaN(page)) {
    //         page = Number(page);
    //     } else {
    //         page = 1;
    //     }

    //     if (page !== 1 && currentPage !== page) {
    //         setCurrentPage(page)
    //     }
    // }, []);
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
            <div>
                <div className='Home-S2'>
                    <div className='Sub-Home-S2'>
                        <div>
                            <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
                        </div>
                    </div>
                    <div className='Sub-Home-S2'>
                        <div className='Head'>
                            <h1>Products</h1>
                        </div>
                    </div>
                    <div className='Sub-Home-S2'>
                        <div className='limit'>
                            <div className='d-flex justify-content-end mt-3'>
                                <select id="cars" onChange={receiveDataFromChild}>
                                    <option value="12" >12</option>
                                    <option value="8">8</option>
                                    <option value="18" >18</option>
                                    <option value="24" >24</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                {
                    product.map((e, i) => {
                        return (

                            <div className='product-box'>
                                <Link to={`/ Product / ${e.id} `} className='link '>
                                    <div className="card-img-top ">
                                        <img src={e.images[0]} className="img2" alt="..." />
                                    </div>

                                    <div className='card-text'>
                                        <h3>{e.title}</h3>
                                    </div>
                                    <div className='card-text'>
                                        <p>Price:-{e.price}</p>
                                    </div>
                                    <div className='card-text'>
                                        <button className='productlist-btn'><Link to={`/ Product / ${e.id} `} className='link'>More</Link></button>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='pagination'>
                <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
            </div>
        </div >
    )
}

export default SearchPage
