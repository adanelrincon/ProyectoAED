# Adan Valorant Teams

An app where you can see all the VCT 2023 Valorant Teams, add new teams, delete teams, or update teams.

#Requirements

-Backend = Eclipse[with Spring]
-Frontend = VisualStudioCode[Ionic Angular]
-DataBase = MySQK

## Postman

https://documenter.getpostman.com/view/29809558/2s9YJgSKXh

##DataBase

DB name = db_teams

CREATE TABLE teams (
  id int not null AUTO INCREMENT,
  name varchar(50) not null,
  region varchar(20) not null,
  position int not null,
  PRIMARY KEY (id)
)

