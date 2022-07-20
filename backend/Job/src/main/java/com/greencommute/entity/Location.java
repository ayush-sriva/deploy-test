package com.greencommute.entity;

import javax.persistence.*;

@Entity
@Table(name = "location")
public class Location {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="id")
        private int id;

        @Column(name = "pin")
        private int pin;

        @Column(name ="name")
        private String name;

        @Column(name = "aqi")
        private int aqi;
        public Location(){}
        public Location(int pin, String name, int aqi) {

            this.pin = pin;
            this.name = name;
            this.aqi = aqi;
        }

    public Location(int id, int pin, String name, int aqi) {
        this.id = id;
        this.pin = pin;
        this.name = name;
        this.aqi = aqi;
    }

    public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public int getPin() {
            return pin;
        }

        public void setPin(int pin) {
            this.pin = pin;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAqi() {
            return aqi;
        }

        public void setAqi(int aqi) {
            this.aqi = aqi;
        }

    @Override
    public String toString() {
        return "Location{" +
                "id=" + id +
                ", pin=" + pin +
                ", name='" + name + '\'' +
                ", aqi=" + aqi +
                '}';
    }
}





