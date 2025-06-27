SET SERVEROUTPUT ON;
SET LINESIZE 200;

-- Table creation and data insertion

CREATE TABLE customers (
  customer_id NUMBER PRIMARY KEY,
  name VARCHAR2(15),
  age NUMBER,
  loan_interest_rate NUMBER,
  balance NUMBER,
  IsVIP CHAR(1)
);

INSERT INTO customers VALUES (101, 'Virat',    62, 7.5, 12000, 'N');
INSERT INTO customers VALUES (102, 'Alia',     58, 8.0, 9500,  'N');
INSERT INTO customers VALUES (103, 'Amitabh',  67, 6.9, 15000, 'N');
INSERT INTO customers VALUES (104, 'Deepika',  45, NULL, 11000, 'N');
INSERT INTO customers VALUES (105, 'Salman',   70, 7.2, 8000,  'N');
INSERT INTO customers VALUES (106, 'Kareena',  35, NULL, 10200, 'N');

CREATE TABLE loans (
  loan_id NUMBER PRIMARY KEY,
  customer_id NUMBER REFERENCES customers(customer_id),
  due_date DATE
);

INSERT INTO loans VALUES (201, 101, SYSDATE + 10);
INSERT INTO loans VALUES (202, 102, SYSDATE + 25);
INSERT INTO loans VALUES (203, 104, SYSDATE + 40);

COMMIT;

-- Scenario 1: Discount loan interest rate for customers over 60

DECLARE
  CURSOR c_customers IS
    SELECT customer_id, name, age, loan_interest_rate FROM customers WHERE loan_interest_rate IS NOT NULL;

  v_cust_id customers.customer_id%TYPE;
  v_name    customers.name%TYPE;
  v_age     customers.age%TYPE;
  v_rate    customers.loan_interest_rate%TYPE;
BEGIN
  OPEN c_customers;
  LOOP
    FETCH c_customers INTO v_cust_id, v_name, v_age, v_rate;
    EXIT WHEN c_customers%NOTFOUND;

    IF v_age > 60 THEN
      UPDATE customers
         SET loan_interest_rate = v_rate - 0.01
       WHERE customer_id = v_cust_id;

      DBMS_OUTPUT.PUT_LINE('Updated interest rate for ' || v_name || ' (ID: ' || v_cust_id || '), New Rate: ' || TO_CHAR(v_rate - 0.01));
    END IF;
  END LOOP;
  CLOSE c_customers;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Interest rates updated for customers over 60.');
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/

-- Scenario 2: Mark customers as VIP if balance > 10000

DECLARE
  CURSOR c_balances IS
    SELECT customer_id, name, balance FROM customers;

  v_cust_id customers.customer_id%TYPE;
  v_name    customers.name%TYPE;
  v_balance customers.balance%TYPE;
BEGIN
  OPEN c_balances;
  LOOP
    FETCH c_balances INTO v_cust_id, v_name, v_balance;
    EXIT WHEN c_balances%NOTFOUND;

    IF v_balance > 10000 THEN
      UPDATE customers
         SET IsVIP = 'Y'
       WHERE customer_id = v_cust_id;

      DBMS_OUTPUT.PUT_LINE('Marked ' || v_name || ' (ID: ' || v_cust_id || ') as VIP. Balance: ' || v_balance);
    END IF;
  END LOOP;
  CLOSE c_balances;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status assigned to eligible customers.');
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/

-- Scenario 3: Send loan reminders for loans due in next 30 days

DECLARE
  CURSOR c_due_loans IS
    SELECT l.loan_id, l.customer_id, l.due_date, c.name
      FROM loans l
      JOIN customers c ON l.customer_id = c.customer_id
     WHERE l.due_date BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 30;

  v_loan_id loans.loan_id%TYPE;
  v_cust_id loans.customer_id%TYPE;
  v_due     loans.due_date%TYPE;
  v_name    customers.name%TYPE;
BEGIN
  OPEN c_due_loans;
  LOOP
    FETCH c_due_loans INTO v_loan_id, v_cust_id, v_due, v_name;
    EXIT WHEN c_due_loans%NOTFOUND;

    DBMS_OUTPUT.PUT_LINE('Reminder: Loan #' || v_loan_id || ' for ' || v_name || ' (Customer ID: ' || v_cust_id || ') is due on ' || TO_CHAR(v_due, 'DD-MON-YYYY'));
  END LOOP;
  CLOSE c_due_loans;
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error fetching due loans: ' || SQLERRM);
END;
/

-- Final output of customers
SELECT * FROM customers;
