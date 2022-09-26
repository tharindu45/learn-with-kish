package net.javaguides.stockservice.dto;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Getter
@Setter
@ToString
@Document(collection = "Stock")
public class Stock {

    private String id;
    private String fuelType;
    private int stock;
    private int allocation;


    public Stock(String fuelType, int stock, int allocation) {
        this.fuelType = fuelType;
        this.stock = stock;
        this.allocation = allocation;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public int getAllocation() {
        return allocation;
    }

    public void setAllocation(int allocation) {
        this.allocation = allocation;
    }


}
