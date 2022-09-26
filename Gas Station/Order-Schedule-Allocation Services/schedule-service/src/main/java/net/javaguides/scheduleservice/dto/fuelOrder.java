package net.javaguides.scheduleservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class fuelOrder {
    private String orderId;
    private String fuelType;
    private int qty;

    private String status;

    private Date date;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }



    public Date getDate() {
        return date;
    }



    public void setDate(Date date) {
        this.date = date;
    }

    public String getOrderId() {
        return orderId;
    }

    public String getFuelType() {
        return fuelType;
    }

    public int getQty() {
        return qty;
    }
}
