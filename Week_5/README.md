# Microservices for Account and Loan

This project creates two simple microservices for a bank, one for accounts and one for loans. Both services run independently and provide REST APIs to get account and loan information.

## Output

**Account Service (Port 8080):**
```json
{
    "number": "00987987973432",
    "type": "savings", 
    "balance": 234343.0
}
```

**Loan Service (Port 8081):**
```json
{
    "number": "H00987987972342",
    "type": "car",
    "loan": 400000.0,
    "emi": 3258.0,
    "tenure": 18
}
```

## Output Image
![Account Output](/Week_5/output/account.png)
![Loan Output](/Week_5/output/loan.png)
