package net.javaguides.scheduleservice.repository;

import net.javaguides.basedomains.dto.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order,Integer> {
}
