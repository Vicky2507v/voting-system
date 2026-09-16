package org.example.votingsystemproject.entity;

import jakarta.persistence.*;
import org.springframework.stereotype.Service;

@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int id;


}
