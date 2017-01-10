// -------------Invoice

/* SELECT * FROM Invoice ;
SELECT * FROM InvoiceLine;

Select [Column names] from [Table] [abbv]
join [Table2] [abbv2] on abbv.prop=abbv2.prop where [Conditions] */


SELECT * FROM Invoice i
JOIN InvoiceLine il ON i.InvoiceId = il.InvoiceId
WHERE UnitPrice > .99
