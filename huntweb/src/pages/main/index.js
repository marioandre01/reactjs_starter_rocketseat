//import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

function Main() {

    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);

    //Por padrão, o efeito será executado quando qualquer um dos adereços ou estado muda
    //usando no segundo argumento de useEffect() um array vazio, o efeito só será executado na primeira renderização
    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts(page = 1) {
        const response = await api.get(`/products?page=${page}`);
        console.log(response.data);
        const { docs, ...productInfo } = response.data;

        setProducts(docs);
        setProductInfo(productInfo);
        setPage(page);
    }

    
    
    function prevPage() {
        
        if (page === 1) return;

        const pageNumber = page - 1;

        loadProducts(pageNumber);
    }

    function nextPage() {

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        loadProducts(pageNumber);
    }

   


    return (
        <div className="product-list">
            {products.map(product => (
                //<h2 key={product._id}>{product.title}</h2>
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <Link to={`/products/${product._id}`}>Acesssar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={nextPage}>Próxima</button>
            </div>
        </div>
    );
}

export default Main;

/*
export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
    
    // componentDidMount com class
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        //console.log(response.data.docs);
        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page, productInfo } = this.state;
        
        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
    //return <h1>Contagem de produtos: { this.state.products.length} </h1>;
        const { products, page, productInfo } = this.state;
    
        return(
            <div className="product-list">
                {products.map(product => (
                    //<h2 key={product._id}>{product.title}</h2>
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acesssar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}
*/


