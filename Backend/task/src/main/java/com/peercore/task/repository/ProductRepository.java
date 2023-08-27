package com.peercore.task.repository;

import com.peercore.task.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

   // @Query("{ stockQuantity: { $lte: ?0 }, reorderPoint: { $gt: 0 } }")
    //List<Product> findByStockQuantityLessThanEqualReorderPoint(int stockQuantity);

}
