package net.javaguides.scheduleservice.kafka;

import net.javaguides.basedomains.dto.Order;
import net.javaguides.basedomains.dto.OrderEvent;
import net.javaguides.scheduleservice.dto.fuelOrder;
import net.javaguides.scheduleservice.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Service

public class SchedulerConsumer {

    private DispatchProducer dispatchProducer;

    @Autowired
    private OrderRepository repository;

    public SchedulerConsumer(DispatchProducer dispatchProducer) {
        this.dispatchProducer = dispatchProducer;
    }

    private static final Logger LOGGER = LoggerFactory.getLogger(SchedulerConsumer.class);

    @KafkaListener(
            topics = "${spring.kafka.topic.name1}" ,
            groupId = "${spring.kafka.consumer.group-id1}")

    public void consume(OrderEvent event){



        //save the order event into the database


        Order order2=new Order();
        order2=event.order;
        String f=order2.getFuelType();
        int allocation=order2.getQty();
        String countStr = String.valueOf( allocation );

        LocalDateTime date=order2.getDate();

        DateTimeFormatter dateTimeFormatter=DateTimeFormatter.ofPattern("yyyy/MM/dd  HH:mm:ss");

        String formattedLocalDateTime =date.format(dateTimeFormatter);

        Random random =new Random();
        int randomAmountOfDays=random.nextInt(5);

        LocalDateTime futureLocalDateTime=date.plusDays(randomAmountOfDays);




        order2.setDate(futureLocalDateTime);
        event.setOrder(order2);
        repository.save(order2);

        fuelOrder dispatchorder=new fuelOrder();

        Date nestDate=java.sql.Timestamp.valueOf(futureLocalDateTime);
        dispatchorder.setDate(nestDate);
        dispatchorder.setFuelType(order2.getFuelType());
        dispatchorder.setOrderId(order2.getOrderId());
        dispatchorder.setStatus(order2.getStatus());
        dispatchorder.setQty(order2.getQty());
        dispatchProducer.sendMessage(dispatchorder);
        String x=futureLocalDateTime.toString();
        LOGGER.info(countStr);
        LOGGER.info(x);




    }


}
