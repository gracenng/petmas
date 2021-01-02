terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "~> 2.3"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_sql_database" "petmasdb" {
  name                = "petmasdb"
  server_name         = "petmas-server"
  resource_group_name = "Grace"
  location            = "East US"
}

resource "azurerm_sql_server" "petmas-server"{
  name                = "petmas-server"
  resource_group_name = "Grace"
  administrator_login = "dnnnguye@uwaterloo.ca"
  administrator__login_password="Water123!"
  location            = "East US"
  version             = "15.0"
}
