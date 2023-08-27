package com.peercore.task.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private String id;
    private String name;
    private int stockQuantity;
    private int reorderPoint;
    private int totalUnitsSold;
    private Boolean notificationEnabled;

}
