<?php
    interface iCrud {
        public function save();
        public function getAll();
        public function update();
        public function delete();
    }