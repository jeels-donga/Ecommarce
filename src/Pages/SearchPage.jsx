import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../Component/Header';
import axios from 'axios';
import Pagination from '../Component/Pagination';
import '../Style/SearchPage.css'

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
                <div className='sub2'>
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
                                        <h4>{e.title}</h4>
                                    </div>
                                    <div className='sec1'>
                                        <p>Price:-{e.price}</p>
                                    </div>
                                    <div className='sec1'>
                                        <button className='productlist-btn'><Link to={`/Product/${e.id} `} className='link'>More</Link></button>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                })}

            </div>
            <div className='section2'>
                <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
            </div>
        </div >
    )
}

export default SearchPage
