package net.javaguides.stockservice.kafka;

import net.javaguides.basedomains.dto.Order;
import net.javaguides.basedomains.dto.OrderEvent;
import net.javaguides.stockservice.dto.Stock;
import net.javaguides.stockservice.repository.StockRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import net.javaguides.stockservice.kafka.OrderProducerUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class OrderConsumer {

    private  int octain_95 ;
    private  int octain_95_allocation ;
    private  int octain_92;
    private  int octain_92_allocation;

    private int super_diesel;
    private int super_diesel_allocation;

    private int auto_disel;
    private int auto_disel_allocation;


    private OrderProducerUpdate orderProducer;

    private OrderShedularProducer orderSchedulerProducer;


    @Autowired
    private StockRepository repository;



    public OrderConsumer(OrderProducerUpdate orderProducer, OrderShedularProducer orderSchedulerProducer) {
        this.orderProducer = orderProducer;
        this.orderSchedulerProducer = orderSchedulerProducer;
    }


    private static final Logger LOGGER = LoggerFactory.getLogger(OrderConsumer.class);

    @KafkaListener(
            topics = "${spring.kafka.topic.name}" ,
            groupId = "${spring.kafka.consumer.group-id}")

    public void consume(OrderEvent event){

        if(repository.findAll().isEmpty()){
            repository.save(new Stock("95 octaine",1000000,0));
            repository.save(new Stock("92 octaine",50000,0));
            repository.save(new Stock("super diesel",50000,0));
            repository.save(new Stock("auto diesel",50000,0));
        }



        for(Stock stock: repository.findStockByfuelType("95 octaine")){
            this.octain_95=stock.getStock();
            this.octain_95_allocation=stock.getAllocation();
        }

        for(Stock stock: repository.findStockByfuelType("92 octaine")){
            this.octain_92=stock.getStock();
            this.octain_92_allocation=stock.getAllocation();
        }

        for(Stock stock: repository.findStockByfuelType("super diesel")){
            this.super_diesel=stock.getStock();
            this.super_diesel_allocation=stock.getAllocation();
        }

        for(Stock stock: repository.findStockByfuelType("auto diesel")){
            this.auto_disel=stock.getStock();
            this.auto_disel_allocation=stock.getAllocation();
        }



        Order order1 =new Order();
        order1=event.order;
        String s=order1.getOrderId();
        String c= order1.getFuelType();

        int a= order1.getQty();

        switch(c){
            case "95 octaine":
                if(a<octain_95-octain_95_allocation){

                    order1.setStatus("Pending");
                    event.setOrder(order1);

                    orderProducer.sendMessage(event);
                    for(Stock stock1: repository.findStockByfuelType("95 octaine")){
                        int allocation=stock1.getAllocation();
                        stock1.setAllocation(allocation+a);
                        repository.save(stock1);
                    }
                    LOGGER.info("Work 1");
                }
                break;
            case "92 octaine":
                if(a<octain_92-octain_92_allocation){
                    order1.setStatus("Pending");
                    event.setOrder(order1);
                    orderProducer.sendMessage(event);

                    orderProducer.sendMessage(event);
                    for(Stock stock1: repository.findStockByfuelType("92 octaine")){
                        int allocation=stock1.getAllocation();
                        stock1.setAllocation(allocation+a);
                        repository.save(stock1);
                    }
                    LOGGER.info("Work 2");
                }
                break;
            case "super diesel":
                if(a<super_diesel-super_diesel_allocation){
                    order1.setStatus("Pending");
                    event.setOrder(order1);
                    orderProducer.sendMessage(event);

                    orderProducer.sendMessage(event);
                    for(Stock stock1: repository.findStockByfuelType("super diesel")){
                        int allocation=stock1.getAllocation();
                        stock1.setAllocation(allocation+a);
                        repository.save(stock1);
                    }
                    LOGGER.info("Work 3");
                }
                break;
            case "auto diesel":
                if(a<auto_disel-auto_disel_allocation){
                    order1.setStatus("Pending");
                    event.setOrder(order1);
                    orderProducer.sendMessage(event);
                    for(Stock stock1: repository.findStockByfuelType("auto diesel")){
                        int allocation=stock1.getAllocation();
                        stock1.setAllocation(allocation+a);
                        repository.save(stock1);
                    }
                    LOGGER.info("Work 4");
                }
                break;
            default:
                order1.setStatus("Failed OutOf Stock");
                event.setOrder(order1);
                orderProducer.sendMessage(event);
                break;


        }




//        LOGGER.info(stock.getFuelType());




    }


}
