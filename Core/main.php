<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $data = $_POST;
  $response = file_get_contents($data);
  echo json_encode(['message' => $response]);
} else {
  echo json_encode(['error' => 'Invalid request method']);
}
?>
