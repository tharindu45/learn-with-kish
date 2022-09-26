//package net.javaguides.stockservice.kafka;
//
//
//import com.google.gson.Gson;
//import net.javaguides.stockservice.dto.Stock;
//import net.javaguides.stockservice.dto.UpdateEvent;
//import net.javaguides.stockservice.repository.StockRepository;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//
//
//
//@Service
//public class Dispatchconsumer {
//
//    @Autowired
//    private StockRepository repository;
//    private static final Logger LOGGER = LoggerFactory.getLogger(Dispatchconsumer.class);
//
//    @KafkaListener(
//            topics = "${spring.kafka.topic.name5}" ,
//            groupId = "${spring.kafka.consumer.group-id}")
//
//    public void consume(String event){
//
//
//
//        LOGGER.info(event);
//
//        Gson g = new Gson();
//        UpdateEvent s = g.fromJson(event, UpdateEvent.class);
//
//        int qty=s.getQty();
//        String fuelType=s.getFuelType();
//        for(Stock stock1: repository.findStockByfuelType(fuelType)){
//                        int allocation=stock1.getAllocation();
//                        int stock=stock1.getStock();
//                        stock1.setAllocation(allocation-qty);
//                        stock1.setStock(stock-qty);
//                        repository.save(stock1);
//                    }
//        LOGGER.info(s.getStatus());
//
//
//
//    }
//
//}
