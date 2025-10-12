-- Roles table
CREATE TABLE Roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50) NOT NULL
);

-- Users table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    role_id INT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES Roles(role_id)
);

-- Airlines table
CREATE TABLE Airlines (
    airline_id INT PRIMARY KEY AUTO_INCREMENT,
    airline_name VARCHAR(100) NOT NULL,
    country VARCHAR(100)
);

-- Airports table
CREATE TABLE Airports (
    airport_id INT PRIMARY KEY AUTO_INCREMENT,
    airport_name VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    country VARCHAR(100)
);

-- Flight_Types table
CREATE TABLE Flight_Types (
    flight_type_id INT PRIMARY KEY AUTO_INCREMENT,
    type_name VARCHAR(50) NOT NULL  -- e.g., Domestic, International
);

-- Flights table
CREATE TABLE Flights (
    flight_id INT PRIMARY KEY AUTO_INCREMENT,
    airline_id INT,
    departure_airport_id INT,
    arrival_airport_id INT,
    departure_time DATETIME,
    arrival_time DATETIME,
    flight_type_id INT,
    FOREIGN KEY (airline_id) REFERENCES Airlines(airline_id),
    FOREIGN KEY (departure_airport_id) REFERENCES Airports(airport_id),
    FOREIGN KEY (arrival_airport_id) REFERENCES Airports(airport_id),
    FOREIGN KEY (flight_type_id) REFERENCES Flight_Types(flight_type_id)
);

-- Booking_Types table
CREATE TABLE Booking_Types (
    booking_type_id INT PRIMARY KEY AUTO_INCREMENT,
    type_name VARCHAR(50) NOT NULL  -- e.g., OneWay, RoundTrip, MultiCity
);

-- Booking_Status table
CREATE TABLE Booking_Status (
    status_id INT PRIMARY KEY AUTO_INCREMENT,
    status_name VARCHAR(50) NOT NULL  -- e.g., Pending, Confirmed, Cancelled
);

-- Bookings table
CREATE TABLE Bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    booking_type_id INT,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(10,2),
    status_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (booking_type_id) REFERENCES Booking_Types(booking_type_id),
    FOREIGN KEY (status_id) REFERENCES Booking_Status(status_id)
);

-- Seat_Classes table
CREATE TABLE Seat_Classes (
    seat_class_id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(50) NOT NULL  -- e.g., Economy, Business, First
);

-- Booking_Flights table
CREATE TABLE Booking_Flights (
    id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT,
    flight_id INT,
    seat_class_id INT,
    price DECIMAL(10,2),
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id),
    FOREIGN KEY (flight_id) REFERENCES Flights(flight_id),
    FOREIGN KEY (seat_class_id) REFERENCES Seat_Classes(seat_class_id)
);

-- Payment_Methods table
CREATE TABLE Payment_Methods (
    payment_method_id INT PRIMARY KEY AUTO_INCREMENT,
    method_name VARCHAR(50) NOT NULL  -- e.g., CreditCard, PayPal, Bkash
);

-- Payment_Status table
CREATE TABLE Payment_Status (
    payment_status_id INT PRIMARY KEY AUTO_INCREMENT,
    status_name VARCHAR(50) NOT NULL  -- e.g., Pending, Completed, Failed
);

-- Payments table
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT,
    amount DECIMAL(10,2),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_method_id INT,
    payment_status_id INT,
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id),
    FOREIGN KEY (payment_method_id) REFERENCES Payment_Methods(payment_method_id),
    FOREIGN KEY (payment_status_id) REFERENCES Payment_Status(payment_status_id)
);

-- Passengers table
CREATE TABLE Passengers (
    passenger_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT,
    name VARCHAR(100) NOT NULL,
    age INT,
    passport_number VARCHAR(50),
    nationality VARCHAR(50),
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id)
);
