package net.javaguides.orderservice.controller;


import net.javaguides.basedomains.dto.Order;
import net.javaguides.basedomains.dto.OrderEvent;
import net.javaguides.orderservice.kafka.OrderProducer;
import net.javaguides.orderservice.kafka.OrderUpdateConsumer;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

private OrderProducer orderProducer;
private OrderUpdateConsumer orderUpdateConsumer;

    public OrderController(OrderProducer orderProducer,OrderUpdateConsumer orderUpdateConsumer) {
        this.orderProducer = orderProducer;
        this.orderUpdateConsumer=orderUpdateConsumer;
    }

    @PostMapping("/orders")
    public String placeOrder(@RequestBody Order order){

        order.setOrderId(UUID.randomUUID().toString());
        OrderEvent orderEvent=new OrderEvent();
        LocalDateTime currentDate=LocalDateTime.now();


        order.setDate( currentDate);
        orderEvent.setOrder(order);

        orderProducer.sendMessage(orderEvent);

        orderUpdateConsumer.consume(orderEvent);
        return "Order placed sucessfully";


    }
}
