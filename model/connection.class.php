<?php
	class Connection extends PDO {
		private $strDBMS = "mysql";
		private $strHost = "127.0.0.1";
		private $strDBName = "c9";
		private $strUsername = "mac8905";
		private $strPassword = "";

		public function __construct() {
			try {
				parent::__construct	(
					$this->strDBMS.':host='.
					$this->strHost.';dbname='.
					$this->strDBName.';charset=utf8',
					$this->strUsername,
					$this->strPassword
				);
			} catch (PDOException $e) {
				var_dump('Connection error: '.$e->getMeassage());
			}
		}
	}