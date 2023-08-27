import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';
import "./ProductCard.css";
import EditProduct from './EditProduct';
import { getProductById } from './APIUtils';

const ProductCard = (props) => {
    const { prod } = props;
    const [showEditModal, setShowEditModal] = useState(false);
    const [product, setProduct] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false);
    const [stockAvailability, setStockAvailability] = useState(null);

    useEffect(() => {
        getProductById(prod?.id)
            .then(fetchedProduct => {
                setProduct(fetchedProduct);
                setStockAvailability(product.stockQuantity <= product.reorderPoint);
            })
            .catch(error => {
                // Handle error
            })
            .finally(() => setIsUpdated(false));
    }, [prod?.id, isUpdated]);

    useEffect(() => {
        console.log(product);
    }, [product]);

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <div className="card-container">
            <EditProduct show={showEditModal} handleClose={handleCloseEditModal} product={product} setIsUpdated={setIsUpdated} />
            <MDBCard className="custom-card" alignment="center">
                <MDBCardHeader className="custom-card-header">{product?.name}</MDBCardHeader>
                <MDBCardBody className="custom-card-body">
                    <MDBCardText className="custom-card-text">Current Stock: {product?.stockQuantity}</MDBCardText>
                    <MDBCardText className="custom-card-text">Reorder Point: {product?.reorderPoint}</MDBCardText>
                    <MDBCardText className="custom-card-text">Total Units Sold: {product?.totalUnitsSold}</MDBCardText>
                    <Badge className="custom-badge" bg={stockAvailability ? 'danger' : 'success'}>
                        {stockAvailability ? 'Low Stock' : 'In Stock'}
                    </Badge>
                    <MDBBtn className="custom-edit-btn ml-3" onClick={handleEditClick}>
                        EDIT
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default ProductCard;
