<?php
    require '../model/connection.class.php';
    require 'crud.interface.php';
    
    class GeneralInformation implements iCrud{
        private $id;
        private $name;
        private $lastname;
        private $address;
        private $city;
        private $telephone;
        private $mobile;
        const table = "general_information";
        
        public function __construct() {
        }
        
        public function __get($property) {
            if (property_exists($this, $property)) {
                return $this->$property;
            }
        }
    
        public function __set($property, $value) {
            if (property_exists($this, $property)) {
                $this->$property = $value;
            }
        }
        
        public function save() {
            
        }
        
        public function getAll() {
            $conn = new Connection();
            $sql = "SELECT * FROM ".self::table;
            $prepare = $conn->prepare($sql);
            $prepare->execute();
            $result = $prepare->fetch(PDO::FETCH_ASSOC);
            $json = json_encode($result);
            $conn = null;
            return json_encode($result);
        }
        
        public function update() {
            
        }
        
        public function delete() {
            
        }
    }
    
    if (isset($_POST)) {
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata, true);
        
        $generalInformation = new GeneralInformation();

        if ($request['all']) {
            echo $generalInformation->getAll();
        }
    }