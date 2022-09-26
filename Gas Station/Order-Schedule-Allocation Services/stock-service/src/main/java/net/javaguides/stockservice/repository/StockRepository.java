package net.javaguides.stockservice.repository;

import net.javaguides.stockservice.dto.Stock;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface StockRepository extends MongoRepository<Stock,String> {
    public List<Stock> findStockByfuelType(String type);
}
