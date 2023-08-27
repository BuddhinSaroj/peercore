package com.peercore.task.controller;

import com.peercore.task.dto.ProductDTO;
import com.peercore.task.model.Product;
import com.peercore.task.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{productId}")
    public Product getProductById(@PathVariable String productId) {
        return productService.getProductById(productId);
    }

    @PutMapping("/{productId}")
    public Product updateStock(@PathVariable String productId, @RequestBody int newStockQuantity) {
        return productService.updateStock(productId, newStockQuantity);
    }

    @PostMapping("/{productId}/notifications")
    public void enableNotifications(@PathVariable String productId, @RequestParam boolean enable) {
        productService.enableNotifications(productId, enable);
    }

    @PostMapping
    public Product addProducts(@RequestBody ProductDTO productDTO) {
        return productService.addProduct(productDTO);
    }
}

