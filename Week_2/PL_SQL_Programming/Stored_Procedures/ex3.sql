SET SERVEROUTPUT ON;
SET LINESIZE 200;

-- Create tables and insert data

CREATE TABLE accounts (
  account_id NUMBER PRIMARY KEY,
  customer_name VARCHAR2(15),
  account_type VARCHAR2(15),
  balance NUMBER
);

INSERT INTO accounts VALUES (301, 'Rahul',   'SAVINGS', 60000);
INSERT INTO accounts VALUES (302, 'Sneha',   'SAVINGS', 45000);
INSERT INTO accounts VALUES (303, 'Vikram',  'CURRENT', 30000);
INSERT INTO accounts VALUES (304, 'Anjali',  'SAVINGS', 85000);
INSERT INTO accounts VALUES (305, 'Amit',    'CURRENT', 50000);

CREATE TABLE employees (
  employee_id NUMBER PRIMARY KEY,
  name VARCHAR2(15),
  department_id NUMBER,
  salary NUMBER
);

INSERT INTO employees VALUES (1, 'Suresh',  10, 52000);
INSERT INTO employees VALUES (2, 'Pooja',   10, 58000);
INSERT INTO employees VALUES (3, 'Ramesh',  20, 47000);
INSERT INTO employees VALUES (4, 'Kiran',   30, 55000);
INSERT INTO employees VALUES (5, 'Meena',   20, 69000);

COMMIT;

-- Procedure 1: Process monthly interest for savings accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE accounts
     SET balance = balance + (balance * 0.01)
   WHERE account_type = 'SAVINGS';

  FOR rec IN (SELECT account_id, customer_name, balance FROM accounts WHERE account_type = 'SAVINGS') LOOP
    DBMS_OUTPUT.PUT_LINE('Interest added for ' || rec.customer_name || ' (Account: ' || rec.account_id || '), New Balance: ₹' || rec.balance);
  END LOOP;

  COMMIT;
END;
/

-- Procedure 2: Update employee bonus based on department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_id IN NUMBER,
  bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE employees
     SET salary = salary + (salary * bonus_percent / 100)
   WHERE department_id = dept_id;

  FOR rec IN (SELECT employee_id, name, salary FROM employees WHERE department_id = dept_id) LOOP
    DBMS_OUTPUT.PUT_LINE('Updated Salary for ' || rec.name || ' (ID: ' || rec.employee_id || '): ₹' || rec.salary);
  END LOOP;

  COMMIT;
END;
/

-- Procedure 3: Transfer funds between accounts

CREATE OR REPLACE PROCEDURE TransferFunds (
  from_account_id IN NUMBER,
  to_account_id IN NUMBER,
  amount IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  SELECT balance INTO from_balance
    FROM accounts
   WHERE account_id = from_account_id
     FOR UPDATE;

  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account');
  END IF;

  UPDATE accounts
     SET balance = balance - amount
   WHERE account_id = from_account_id;

  UPDATE accounts
     SET balance = balance + amount
   WHERE account_id = to_account_id;

  DBMS_OUTPUT.PUT_LINE('₹' || amount || ' transferred from Account ' || from_account_id || ' to Account ' || to_account_id);

  COMMIT;
END;
/

-- Execute Scenario 1: Interest to savings accounts
EXEC ProcessMonthlyInterest;

-- Execute Scenario 2: Bonus to department 10
EXEC UpdateEmployeeBonus(10, 15);

-- Execute Scenario 3: Transfer ₹7000 from Rahul (301) to Vikram (303)
EXEC TransferFunds(301, 303, 7000);

-- Show final accounts table
PROMPT Accounts after monthly interest and fund transfer:
SELECT * FROM accounts ORDER BY account_id;

-- Show final employees table
PROMPT Employees after bonus update:
SELECT * FROM employees ORDER BY employee_id;
