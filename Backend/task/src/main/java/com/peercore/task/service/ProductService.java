package com.peercore.task.service;

import com.peercore.task.dto.ProductDTO;
import com.peercore.task.model.Product;
import com.peercore.task.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product updateStock(String productId, int newStockQuantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        product.setStockQuantity(newStockQuantity);
        return productRepository.save(product);
    }

    public void enableNotifications(String productId, boolean enable) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        product.setNotificationEnabled(enable);
        productRepository.save(product);
    }

    public Product getProductById(String productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

    }

    public Product addProduct(ProductDTO productDTO){
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setStockQuantity(productDTO.getStockQuantity());
        product.setReorderPoint(productDTO.getReorderPoint());
        product.setTotalUnitsSold(productDTO.getTotalUnitsSold());
        product.setNotificationEnabled(productDTO.getNotificationEnabled());
        return productRepository.save(product);
    }
}
