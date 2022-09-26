package net.javaguides.scheduleservice.kafka;

import net.javaguides.basedomains.dto.OrderEvent;
import net.javaguides.basedomains.dto.Order;
import net.javaguides.scheduleservice.dto.fuelOrder;
import org.apache.kafka.clients.admin.NewTopic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class DispatchProducer {

    private static final Logger LOGGER = LoggerFactory.getLogger(DispatchProducer.class);
    private NewTopic topic;

    private KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public DispatchProducer(NewTopic topic, KafkaTemplate<String, OrderEvent> kafkaTemplate) {
        this.topic = topic;
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(fuelOrder order){

        LOGGER.info(String.format("Order Dispatch => %s", order.toString()));

        //create message

        Message<fuelOrder> message = MessageBuilder
                .withPayload(order)
                .setHeader(KafkaHeaders.TOPIC, topic.name())
                .build();
        kafkaTemplate.send(message);
    }
}
