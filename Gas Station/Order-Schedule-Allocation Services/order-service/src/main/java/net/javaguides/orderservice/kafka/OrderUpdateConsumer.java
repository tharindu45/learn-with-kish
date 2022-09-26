package net.javaguides.orderservice.kafka;

import net.javaguides.basedomains.dto.Order;
import net.javaguides.basedomains.dto.OrderEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Service

public class OrderUpdateConsumer {


    private static final Logger LOGGER = LoggerFactory.getLogger(OrderUpdateConsumer.class);

    @KafkaListener(
            topics = "${spring.kafka.topic.name1}" ,
            groupId = "${spring.kafka.consumer.group-id}")

    public void consume(OrderEvent event){



        //save the order event into the database

        Order order2=new Order();
        order2=event.order;
        String f=order2.getFuelType();
        LocalDateTime d=order2.getDate();
        Date u=java.sql.Timestamp.valueOf(d);
        String x=u.toString();
        String status=order2.getStatus();
        LOGGER.info(x);
        LOGGER.info(String.valueOf(status));
        LOGGER.info("you have receive messge");

//        String str=String.valueOf(d);
//        LOGGER.info(d);


    }


}
