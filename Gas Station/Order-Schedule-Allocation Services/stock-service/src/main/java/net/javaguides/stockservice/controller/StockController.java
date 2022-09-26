package net.javaguides.stockservice.controller;


import net.javaguides.basedomains.dto.Order;
import net.javaguides.basedomains.dto.OrderEvent;

import net.javaguides.stockservice.dto.Stock;
import net.javaguides.stockservice.kafka.OrderProducerUpdate;
import net.javaguides.stockservice.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4201")
public class StockController {

    @Autowired
    private StockRepository stockRepository;
    private OrderProducerUpdate orderProducer;

    public StockController(OrderProducerUpdate orderProducer) {
        this.orderProducer = orderProducer;
    }

    @PostMapping("/update")
    public String placeOrder1(Order order){

        order.setOrderId(UUID.randomUUID().toString());
        OrderEvent orderEvent=new OrderEvent();

        orderEvent.setOrder(order);

        orderProducer.sendMessage(orderEvent);

        return "Order placed sucessfully Update";


    }
    @GetMapping("/findAllStock")
    public List<Stock> getStock(){
        if(stockRepository.findAll().isEmpty()){
            stockRepository.save(new Stock("95 octaine",1000000,0));
            stockRepository.save(new Stock("92 octaine",50000,0));
            stockRepository.save(new Stock("super diesel",50000,0));
            stockRepository.save(new Stock("auto diesel",50000,0));
        }

        return stockRepository.findAll();
    }


    @PostMapping("/updateStock/{fuelType}")
    public String updateStudent(@RequestBody Stock stock,@PathVariable("fuelType") String fuelType) {

    String a;
        if (stock==null){
            a="This is null Oblect";
        }
        else{
            a="This is not null value";
        }
        String ft= stock.getFuelType();
        for(Stock stock1: stockRepository.findStockByfuelType(ft)){
            int current_stock=stock1.getStock();
            stock1.setStock(current_stock+stock.getStock());
            stockRepository.save(stock1);
        }
        return a;
    }
}
