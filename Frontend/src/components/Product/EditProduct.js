import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateStock } from './APIUtils';

const EditProduct = (props) => {
    const { show, handleClose, product, setIsUpdated } = props;
    console.log("prod", product);
    const [stockQuantity, setStockQuantity] = useState(null);

    useEffect(() => { setStockQuantity(product?.stockQuantity) }, [product]);

    const handleSaveChanges = () => {
        updateStock(product?.id, stockQuantity)
            .then(updatedProduct => {
                setIsUpdated(true);
                handleClose();
            })
            .catch(error => {
                console.error('Error updating stock:', error);
            });
    };

    useEffect(() => { console.log(stockQuantity); }, [stockQuantity])

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="stockQuantity">
                        <Form.Label>Stock Quantity:</Form.Label>
                        <Form.Control
                            type="number"
                            value={stockQuantity}
                            onChange={(e) => setStockQuantity(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditProduct;
