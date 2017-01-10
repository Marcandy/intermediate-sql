// -------------Invoice

/* SELECT * FROM Invoice ;
SELECT * FROM InvoiceLine;

Select [Column names] from [Table] [abbv]
join [Table2] [abbv2] on abbv.prop=abbv2.prop where [Conditions] */


SELECT * FROM Invoice i
JOIN InvoiceLine il ON i.InvoiceId = il.InvoiceId
WHERE UnitPrice > .99

SELECT InvoiceDate, Total, FirstName, LastName FROM Invoice i
JOIN Customer c ON i.CustomerId = c.CustomerId

SELECT  c.FirstName, c.LastName,e.FirstName, e.LastName  FROM Customer c
JOIN Employee e ON(e.EmployeeId = c.SupportRepId)
