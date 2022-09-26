package net.javaguides.stockservice.controller;


import net.javaguides.basedomains.dto.Order;
import net.javaguides.basedomains.dto.OrderEvent;

import net.javaguides.stockservice.kafka.OrderProducerUpdate;
import net.javaguides.stockservice.kafka.OrderShedularProducer;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v2")
public class SchedulController {

    private OrderShedularProducer orderShedular;

    public SchedulController(OrderShedularProducer orderShedular) {
        this.orderShedular = orderShedular;
    }

    @PostMapping("/schedule")
    public String placeOrder1(Order order){

        order.setOrderId(UUID.randomUUID().toString());
        OrderEvent orderEvent=new OrderEvent();

        orderEvent.setOrder(order);

        orderShedular.sendMessage2(orderEvent);

        return "Order Shedule is pending";


    }
}
