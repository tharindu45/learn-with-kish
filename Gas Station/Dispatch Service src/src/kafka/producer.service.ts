import { Injectable, Logger, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord } from "kafkajs";

@Injectable()
export class ProducerService implements OnModuleInit,OnApplicationShutdown{
    private readonly Logger = new Logger(ProducerService.name);
    
    private readonly kafka=new Kafka({
        brokers :['localhost:9092']
    })

    private readonly producer : Producer =this.kafka.producer()


    async produce(record :ProducerRecord){
        await this.producer.send(record)

        // this.Logger.log(
        //     `sending message : ${record.messages[0].value?.toString()}`,
        //   );
        //   await new Promise((f) => setTimeout(f, 5000));
        //   await this.producer.send(record);

    } 

    async onModuleInit() {
        await  this.producer.connect()
    }

    async onApplicationShutdown() {
        await this.producer.disconnect()
    }
}