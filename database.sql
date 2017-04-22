CREATE DATABASE FX;

	CREATE TABLE currencyRate (
		cid int NOT NULL UNIQUE,
		s_name VARCHAR(5) NOT NULL UNIQUE,
		buy float NOT NULL,
		sell float NOT NULL,
		PRIMARY KEY (cid)
	);
	
	INSERT INTO currencyRate (cid, c_name, s_name, buy, sell)
	VALUES (1, 'HKD', 1, 1);
	
	INSERT INTO currencyRate (cid, c_name, s_name, buy, sell)
	VALUES (2, 'USD', 7.7600, 7.7920);
	
	INSERT INTO currencyRate (cid, c_name, s_name, buy, sell)
	VALUES (3, 'CNY', 1.1208, 1.1366);
	
	INSERT INTO currencyRate (cid, c_name, s_name, buy, sell)
	VALUES (4, 'EUR', 8.2760, 8.4120);
	
	INSERT INTO currencyRate (cid, c_name, s_name, buy, sell)
	VALUES (5, 'JPY', 0.07061, 0.07194);
	
	INSERT INTO currencyRate (cid, c_name, s_name, buy, sell)
	VALUES (6, 'NTD', 0.251, 0.2720);